import XML2JS from 'xml2js';
import ZipController from '../ZipController';

class AlmanacController{
  constructor(affiliate){
    this.zips = new ZipController(affiliate)
    this.feedUrl = `https://almanac.feeds.wdtinc.com/feeds/news9/almanac.php?`;
    this.hasLocalStorage = this.hasLocalStorage();
    this.cacheDuration = 1000 * 24 * 60 * 60;

  }

  formattedDate(date =  new Date()){
    date.setDate(date.getDate() ); //seriously, this feed gives to the almanac for the day BEFORE. how annoying
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let thisdate = date.getDate();
    if (month < 10){ month = `0${month}`; }
    if (thisdate < 10){ thisdate = `0${thisdate}`; }
    return `${year}-${month}-${thisdate}`; //${} embeds variable in string literal in ES6
  }

  hasLocalStorage(){
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

  get(callback){
    if(this.hasLocalStorage)
      if(localStorage.getItem('almanacData') && localStorage.getItem('almanacDataTimestamp'))
        if( Date.now() < parseInt(localStorage.getItem('almanacDataTimestamp'),10) + this.cacheDuration ){
          callback( JSON.parse(localStorage.getItem('almanacData')))
          return;
        }
    this.fetch(callback)
  }

  fetch(callback,date){
    var url = this.feedUrl + 'ZIP=' + this.zips.get()[0] + '&DATE=' + this.formattedDate(date) ;

    this.Ajax(url).then((xml)=>{
      let almanacData = this.convertToJson(xml)
      localStorage.setItem('almanacData', JSON.stringify(almanacData))
      localStorage.setItem('almanacDataTimestamp', Date.now())
      callback( almanacData )
    })
  }

  changeDate(date, callback){

    localStorage.removeItem('almanacData')
    localStorage.removeItem('almanacDataTimestamp')

    this.fetch(callback, date)
  }

  convertToJson(xml){
    let parseString = XML2JS.parseString;
    let jsondata;
    parseString(xml, {attrNameProcessors: [(name => `@${name}`)], explicitArray: false, charkey: "#text", mergeAttrs: true}, (err, result) => { jsondata = result; });
    let datasrc = jsondata['locations']['location'];
    let daydata = datasrc['day'];
    let dateValues = datasrc['day']['@date'].split('-'); //year, month, day
    let date = new Date(dateValues[0], dateValues[1] - 1, dateValues[2])
    return {
              day : datasrc['day']['@day_of_week'],
              date : date.getTime(),
              lat: parseFloat(datasrc['@request_lat']),
              lng: parseFloat(datasrc['@request_lon']),
              city : datasrc['@request_city'],
              state : datasrc['@request_state'],
              high : parseInt(daydata['temp_max']),
              low : parseInt(daydata['temp_min']),
              averageHigh : parseInt(daydata['normal_max']),
              averageLow : parseInt(daydata['normal_min']),
              recordHigh : parseInt(daydata['record_max_max']),
              recordHighYear: daydata['record_max_max_year'],
              recordLowYear: daydata['record_min_min_year'],
              recordLow : parseInt(daydata['record_min_min']),
              precip : parseFloat(daydata['precip_in']),
              precipMTD : parseFloat(daydata['precip_mtd']),
              precipYTD : parseFloat(daydata['precip_ytd']),
              snow : parseFloat(daydata['snow_day']),
              snowMTD : parseFloat(daydata['snow_mtd']),
              sunRise : daydata.sunrise_time_local,
              sunSet : daydata.sunset_time_local
            }

  }


}

export default AlmanacController;
