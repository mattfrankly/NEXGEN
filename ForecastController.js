import XML2JS from 'xml2js';

import ZipController from './ZipController'
/* SO this is confusing, Because frankly buils the modules from within
components/ModuleName and the working directory does not change as it traverses to the controller */


const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];
const cacheDuration = 1000 * 15;
const hasLocalStorage =
(function(){
  let uid = new Date();
    try {
        localStorage.setItem(uid, uid);
        localStorage.removeItem(uid);
        return true;
    } catch (e) {
      return false;
    }
})();

var wait = false;


function url(){
  console.log("*** ForecastController url()");
  var site = ZipController.getAffiliate() === 'kotv' ? '1': '2'
  var zip = ZipController.get()
//   console.log("*** ForecastController url() result:", `https://kotv.com/api/GetForecast.ashx?target=data&action=WxForecast2012&site=${site}&zip=${zip}`);
  return `https://kotv.com/api/GetForecast.ashx?target=data&action=WxForecast2012&site=${site}&zip=${zip}`
}


function get(callback){
    console.log("*** ForecastController");
    if(hasLocalStorage) {
      console.log("*** ForecastController hasLocalStorage");
      if(localStorage.getItem('forecastData') && localStorage.getItem('forecastDataTimestamp')) {
      console.log("*** ForecastController hasLocalStorage && getItem");
        if( Date.now() < parseInt(localStorage.getItem('forecastDataTimestamp'),10) + cacheDuration ){
          console.log("*** ForecastController hasLocalStorage && getItem && Date");
          let forecastData = JSON.parse(localStorage.getItem('forecastData'))
          callback(forecastData )
          return;
        }
      }
    }
    fetch(callback)
  }



function fetch(callback){
    console.log("*** ForecastController fetch");
    if(typeof window != 'object')
      return
      console.log("*** ForecastController fetch try");
      try{
        let req = new XMLHttpRequest();
        req.open('GET', url());
        req.onload = function() {
          if (req.status === 200) {
            console.log("*** ForecastController fetch try req.status === 200");

            try{
              var forecastData = convertToJson(req.response)
              console.log("*** ForecastController fetch try forecastData", forecastData);

            }
            catch(e){
              localStorage.removeItem('forecastData')
              localStorage.removeItem('forecastDataTimestamp')
              ZipController.clear()

              return
            }

            localStorage.setItem('forecastData', JSON.stringify(forecastData))
            localStorage.setItem('forecastDataTimestamp', Date.now())
            if(callback)
              callback( forecastData )
          } else {
            console.log("*** ForecastController fetch try ERROR req.statusText", req.statusText);
            throw new Error(req.statusText )
          }
        };
        req.onerror = function() {
          console.log("*** ForecastController fetch try ERROR");
          throw new Error('Network error from ' + url() );
        };
        req.send();
      }
      catch(e){
        return false
      }

  }

function convertToJson(forecastdata){
    function formatIcon(icon){
      if (icon.indexOf('/') > -1){
        return icon.split('/')[1];
      } else {
        return icon;
      }
    }

    let forecasts = [];
    let jsondata;
    XML2JS.parseString(forecastdata,
      {
        attrNameProcessors: [(name => `@${name}`)],
        explicitArray: false,
        charkey: "#text",
        mergeAttrs: true
      },
      (err, result) => {
        jsondata = result;
      }
    );
    let maindata = jsondata["WxSources"];

    let currentdata = maindata["conditions"]["sfc_ob"];
    let UTCtime = currentdata["ob_time"];
    let dateArr = UTCtime.split(' ')[0].split('-')
    let localtime = new Date()
    localtime.setFullYear(dateArr[0])
    localtime.setMonth(dateArr[1]-1)
    localtime.setDate(dateArr[2])
    let updatedtime = `
      ${dayArr[localtime.getDay()]},
      ${monthArr[localtime.getMonth()]} ${localtime.getDate()},
      ${localtime.getFullYear()}
    `;
    let localtemp = currentdata["temp"]["#text"];
    let tmpThis = this;
    let normFormat = true;

    if (typeof maindata["forecast"]["WxForecasts"] !== 'undefined'){ //kwtv
      forecastdata = maindata["forecast"]["WxForecasts"]["WxForecast"];

    } else { //kotv
      forecastdata = maindata["forecast"]["forecast"]["daily_summary"];
      normFormat = false;

    }

    window.teststuff = jsondata;
    let iconUrl = 'http://ftpcontent.worldnow.com/griffin/gnm/testing/svg/day/';
    for (let i = 0, len = forecastdata.length; i < len; i += 1){
      let curForecast = forecastdata[i];
      let fullDate;
      let dateStr = '';
      if (normFormat){
        fullDate = new Date(curForecast["@Date"]);
        dateStr = `
          ${dayArr[fullDate.getUTCDay()]},
          ${monthArr[fullDate.getMonth()].substring(0, 3)} ${fullDate.getDate()},
          ${fullDate.getFullYear()}
        `;
      }
      let tmpObj = {
          key: i,
          id: normFormat ? curForecast["@WxForecastId"] : curForecast["summary_date"].replace('/', ''),
          date: normFormat ? dayArr[(new Date(curForecast["@Date"])).getUTCDay()] : dayArr[(new Date(curForecast["summary_date"])).getUTCDay()],
          condition: normFormat ? curForecast["Condition"].replace(/&amp;/g, '&') : curForecast["wx"].replace(/&amp;/g, '&'),
          conditionicon: normFormat ? `${iconUrl}${curForecast["@WxIconTypeAbbrev"]}.svg` : `${iconUrl}${formatIcon(curForecast["wx_icon_text"])}.svg`,
          low: normFormat ? curForecast["Low"] : curForecast["low"],
          high: normFormat ? curForecast["High"] : curForecast["high"],
          sunrise: normFormat ? curForecast["Sunrise"] : curForecast["sunrise"],
          sunset: normFormat ? curForecast["Sunset"] : curForecast["sunset"],
          description: normFormat ? curForecast["Description"] : '',
          windspeedmin: normFormat ? curForecast["WindSpeedMin"] : curForecast["wnd_spd"],
          windspeedmax: normFormat ? curForecast["WindSpeedMax"] : curForecast["wnd_spd"],
          winddirection: normFormat ? curForecast["WindDirection"] : curForecast["wnd_dir"],
          precipitation: normFormat ? `${curForecast["Precipitation"]}%` : `${curForecast["pop"]}%`,
          extendedTitle: `Outlook for ${dateStr}`,
          precipToggle: true
        };
      if (tmpObj.precipitation === '0%'){
        tmpObj.precipitation = '';
        tmpObj.precipToggle = false;
      }
      if (i < 9){
        forecasts.push(tmpObj);
      }
    }

    return{
      updated: updatedtime,
      UTCtime: UTCtime,
      city: currentdata["location"]["#text"],
      state: currentdata["location"]["@region"],
      conditionIcon: `https://ftpcontent.worldnow.com/griffin/gnm/testing/svg/day/${currentdata["WxIconType"]["#text"]}.svg`,
      temp: currentdata["temp"]["#text"],
      conditionText: currentdata["wx"],
      feelsLike: currentdata["apparent_temp"]["#text"],
      dew: currentdata["dewp"]["#text"],
      humidity: currentdata["rh"],
      visibility: parseInt(currentdata["visibility"]["#text"] / 5280, 10),
      windSpeed: currentdata["wnd_spd"]["#text"],
      windDirection: currentdata["wnd_dir"],
      pressure: currentdata["press"]["#text"],
      forecasts,
      hourly : maindata.hourly.locations.location.forecasts.hourly,
    }
  }



if(typeof window == 'object')
  window.ForecastController = {url,get,fetch}


export default {get}
