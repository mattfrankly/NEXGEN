import XML2JS from 'xml2js';

const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];

const highestTemperature = 115;

class WeatherController {
  constructor(stationID){
    this.stationID = stationID;
    this.station = stationID === 1 ? 'kotv' : 'kwtv';
    this.defaultZip = stationID === 1 ? 74120 : 73179;
    this.todaysDate = new Date();
    this.defaultDate = WeatherController.getDefaultDate(this.todaysDate);
    this.almanacFeedURL = ' http://almanac.feeds.wdtinc.com/feeds/news9/almanac.php? ';
    this.weatherFeedURL = `http://kotv.com/api/GetForecast.ashx?target=data&action=WxForecast2012&site=${stationID}&zip=`;
    this.skycamFeedURL = `http://kotv.com/api/getLiveCams.aspx?station=${this.station}`;
    this.cacheDuration = (300 * 1000); //1000 = milliseconds, # left of * is in seconds
  }

  static getDefaultDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let thisdate = date.getDate();
    if (month < 10){ month = `0${month}`; }
    if (thisdate < 10){ thisdate = `0${thisdate}`; }
    return `${year}-${month}-${thisdate}`; //${} embeds variable in string literal in ES6
  }

  getCache(type, callback, zip = this.defaultZip, almDate = this.defaultDate, cacheMe = true){
    let feedUrl;
    let returnType;
    let almBool = true;

    let intZip = zip;

    switch (type) {
      case 'currents':
        feedUrl = this.weatherFeedURL + intZip;
        returnType = 'text';
      break;
      case 'almanac':
        feedUrl = `${this.almanacFeedURL}ZIP=${intZip}&DATE=${almDate}`;
        returnType = 'text';
        almBool = almDate === this.defaultDate;
      break;
      case 'skycam':
        feedUrl = this.skycamFeedURL;
        returnType = 'json';
      break;
      default:
      break;
    }

    if (WeatherController.hasLocalStorage() && cacheMe){
      let now = (new Date()).getTime();
      let typeName = type === 'skycam' ? type : `${type}_${intZip}`;
      let typeExpire = type === 'skycam' ? `${type}_expire` : `${type}_${intZip}_expire`;
      let currentdata = localStorage.getItem(typeName);
      let current_expire = localStorage.getItem(typeExpire);
      if (!currentdata || current_expire < now || !almBool){
        window.processQueue = window.processQueue ||
          {currents: false, almanac: false, skycam: false};
        if (!window.processQueue[type]){
          window.processQueue[type] = true;
          this.getData(feedUrl, returnType, callback, type, intZip, almBool);
        } else {
          let checkQueue = () => {
            if (!window.processQueue[type]){
              currentdata = localStorage.getItem(typeName);
              return callback(currentdata);
            } else {
              setTimeout(checkQueue, 50);
            }
            return false;
          };
          setTimeout(checkQueue, 50);
        }
      } else {
        if (returnType === 'json'){
          return callback(JSON.parse(currentdata));
        } else {
          return callback(currentdata);
        }
      }
    } else {
      this.getData(feedUrl, returnType, callback, type, intZip, almBool, false);
    }
    return false;
  }

  static hasLocalStorage(){
    let uid = new Date();
      try {
          localStorage.setItem(uid, uid);
          localStorage.removeItem(uid);
          return true;
      } catch (e) {
        return false;
      }
  }

  Ajax(url) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(new Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(new Error('Network error'));
      };
      req.send();
    });
  }


  getData(feed, datatype, callback, lsType, zip, extraParams, cacheMe = true){
    let ajax_config = { url: feed, dataType: datatype }
  //  console.log('ajax_config', ajax_config)

    this.Ajax(feed).then((data)=>{
      if(WeatherController.hasLocalStorage() && cacheMe){
        let typeName = lsType === 'skycam' ? lsType : `${lsType}_${zip}`;
        let typeExpire = lsType === 'skycam' ? `${lsType}_expire` : `${lsType}_${zip}_expire`;
        let cachetime = (new Date()).getTime() + this.cacheDuration;
        if (datatype === 'json'){
          localStorage.setItem(typeName, JSON.stringify(data));
        } else {

          localStorage.setItem(typeName, data);
        }
        localStorage.setItem(typeExpire, cachetime);
        window.processQueue[lsType] = false;
      }
      callback(data, extraParams);
    })
  }

  
}

export default WeatherController;
