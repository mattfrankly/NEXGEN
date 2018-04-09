import React, { Component } from 'react';
/* escape deployment replacement */import XML2JS from 'xml2js';

const parseString = XML2JS.parseString;
const monthsAbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
class TopStories extends Component {
  constructor(props){ //gives us acces to props, fires long before page load
    super(props) //assigns props to this.props
    this.defaultImage = this.props.affiliate == 'kotv' ? 'http://kwtv.images.worldnow.com/images/12470342_G.png' : 'http://kwtv.images.worldnow.com/images/12470342_G.png';
    this.feedId = this.props.affiliate == 'kotv' ? 96 : 158;
    this.state = {
      stories:  [] //should be array of length 5
    } /* great place to assign default state */
    this.classes = ['col-xs-12 col-sm-6','col-xs-12 col-sm-6','col-xs-12 col-sm-4','col-xs-12 col-sm-4','col-xs-12 col-sm-4'];
  }
  ajax = (url,callback) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
        if (req.status === 200) {
            callback(req.response);
        } else {
            new Error(req.statusText);
        }
    };
    req.onerror = function() {
        new Error('Network error');
    };
    req.send();
  }

  componentWillMount(){
  }

  componentDidMount(){
    this.ajax('http://kotv.com/api/getDataFeed.ashx?id=' + this.feedId, this.createStories)
  }

  createStories = (xml) =>{
    let jsondata;
    let errReport;
    parseString(xml,
      {
        attrNameProcessors: [(name => `@${name}`)],
        explicitArray: false,
        charkey: '#text',
        mergeAttrs: true
      },
      (err, result) => {
        errReport = err;
        jsondata = result;
      }
    )
    let topStoryData = jsondata['Items']['Item'][1]['Category']['Items']['Item'];
    let topStories = this.arrayGen(topStoryData, 5);
    this.setState({
      stories: topStories
    })
  }

  arrayGen(stories, count){
    let tmpArr = [];
    for (let i = 0; i < count; i += 1){
      let curStory = stories[i];
      let tmpObj = {
        id: curStory['@Id'],
        title: curStory['Title'],
        image: curStory.hasOwnProperty('Image') ? curStory['Image']['Url'] : this.defaultImage,
        readableTimeAgo: this.readableTimeAgo(curStory['@LastEditedDate']),
        flagName: curStory['@AdClassification'].split(' ')[0],
        link: curStory['Link'],
      }
      tmpArr.push(tmpObj);
    }

    return tmpArr;
  }

  readableTimeAgo(utcDateString){
    if(!utcDateString)
      return '';
    var secondsAgo = Math.floor((Date.now() - Date.parse(utcDateString))/1000);
    var minutesAgo = Math.floor(secondsAgo/60);
    var hoursAgo = Math.floor(minutesAgo/60);
    var daysAgo = Math.floor(hoursAgo/24);
    var monthsAgo = Math.floor(daysAgo/31);
    if(minutesAgo == 0)
      return secondsAgo + 'sec';
    if(hoursAgo == 0)
      return minutesAgo + 'min';
    if(daysAgo == 0 )
      return hoursAgo + (hoursAgo > 1 ? 'hrs' : 'hr');
    if(monthsAgo == 0)
      return daysAgo + (daysAgo > 1 ? 'days' : 'day');
    return '';
  }

  render(){
    return (
      <div className='gnm-top-stories'>
        <div className='row'>
          <div className='col-xs-12'>
            { this.state.stories.map((s,i)=>(
              <div key={i} className={this.classes[i]}>
                <a className='gradient-inline-block' href={s.link} >
                  <img className='' src={s.image} alt={s.title} />
                  <div className='gradient-inline-block__headline '>
                    <span className={'category-flag ' + ( s.flagName.toLowerCase() )}>{s.flagName}</span>
                    <div className='ie-spacer' />
                    <span className='media-title'>{s.title}</span>
                    <span className='media-time'>{s.readableTimeAgo}</span>
                  </div>
                </a>
              </div>
              ))}
          </div>
        </div>

      </div>
    )
  }
}

export default TopStories;
