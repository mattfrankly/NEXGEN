import React, {Component, PropTypes} from 'react';
import BannerController from '../BannerController';
/* weather takeover does not need server-side rendering */
const testBannerData = [
  {
    Title: 'Watch Live Now',
    Type: 'ls',
    Link: 'javascript:GNM.liveStream("http://www.newson6.com/Global/category.asp?C=202152&amp;BannerId=1343");',
    Description: 'Severe Weather Coverage',
    Target: '_self',
    BannerTypeId: 5,
    BannerInfoTypeMask: 247,
    EncoderTypeId: 7,
    EncoderUrls: [
      {
        EncoderUrlTypeId: 2,
        EncoderUrlTypeTitle: 'Mobile',
        Url: 'http://kotv-lh.akamaihd.net/i/KOTV_1180@97915/master.m3u8'
      }, {
        EncoderUrlTypeId: 1,
        EncoderUrlTypeTitle: 'Website',
        Url: 'http://kotv-lh.akamaihd.net/z/KOTV_1180@97915/manifest.f4m'
      }
    ],
    Audio: !0,
    Theme: '',
    Content: 'Weather'
  }, {
    Title: 'Watch Live Now',
    Type: 'ls',
    Link: 'javascript:GNM.liveStream(" http: //www.newson6.com/Global/category.asp?C=202152&amp;BannerId=1343");',
    Description: 'Skycam View of Tornado',
    Target: '_self',
    BannerTypeId: 5,
    BannerInfoTypeMask: 247,
    EncoderTypeId: 7,
    EncoderUrls: [
      {
        EncoderUrlTypeId: 2,
        EncoderUrlTypeTitle: 'Mobile',
        Url: 'http://kotv-lh.akamaihd.net/i/KOTV_1180@97915/master.m3u8'
      }, {
        EncoderUrlTypeId: 1,
        EncoderUrlTypeTitle: 'Website',
        Url: 'http://kotv-lh.akamaihd.net/z/KOTV_1180@97915/manifest.f4m'
      }
    ],
    Audio: !0,
    Theme: '',
    Content: 'Weather'
  }, {
    Title: 'Watch Live Now',
    Type: 'ls',
    Link: 'javascript:GNM.liveStream(" http: //www.newson6.com/Global/category.asp?C=202152&amp;BannerId=1343");',
    Description: 'Von Castor Drives Through Tornado',
    Target: '_self',
    BannerTypeId: 5,
    BannerInfoTypeMask: 247,
    EncoderTypeId: 7,
    EncoderUrls: [
      {
        EncoderUrlTypeId: 2,
        EncoderUrlTypeTitle: 'Mobile',
        Url: 'http://kotv-lh.akamaihd.net/i/KOTV_1180@97915/master.m3u8'
      }, {
        EncoderUrlTypeId: 1,
        EncoderUrlTypeTitle: 'Website',
        Url: 'http://kotv-lh.akamaihd.net/z/KOTV_1180@97915/manifest.f4m'
      }
    ],
    Audio: !0,
    Theme: '',
    Content: 'Weather'
  }, {
    Title: 'Special Coverage',
    Type: 'link',
    Link: 'http://www.newson6.com/category/310877/terence-crutcher-police-shooting',
    Description: 'Betty Shelby Manslaughter Trial ',
    Target: '_self',
    BannerTypeId: 3,
    BannerInfoTypeMask: 83,
    EncoderTypeId: 0,
    Audio: !0,
    Theme: '',
    Content: 'Livestreaming'
  }, {
    Title: 'Need To Know',
    Type: 'link',
    Link: 'http://www.newson6.com/story/7724324/oklahoma-lake-levels',
    Description: 'Oklahoma Lake Levels',
    Target: '_self',
    BannerTypeId: 3,
    BannerInfoTypeMask: 7,
    EncoderTypeId: 0,
    Audio: !1,
    Theme: '',
    Content: 'Livestreaming'
  }
];

//temp for testing
const testData = true;
const testDataObj = {
  'date': '2016-03-28T09:44:41.7797644-05:00',
  'Alert': [
    {
      'type': 'Tornado Watch',
      'IssueAt': '2016-03-28T04:29:00',
      'ExpiresAt': '2016-03-29T19:00:00',
      'AffectedAreas': {
        'Area': [
          {
            'id': 'Okmulgee, OK'
          }, {
            'id': 'Pawhuska, OK'
          }, {
            'id': 'Tulsa, OK'
          }, {
            'id': 'Owasso, OK'
          }, {
            'id': 'Atoka, OK'
          }, {
            'id': 'Broken Arrow, OK'
          }, {
            'id': 'Bixby, OK'
          }, {
            'id': 'Prue, OK'
          }
        ]
      },
      'AlertTextShort': {
        'section': 'Tornado Watch in effect until March 29 at 7:00PM CDT by NWS.'
      },
      'AlertTextLong': {
        'section': '...FIRE WEATHER WATCH REMAINS IN EFFECT FROM TUESDAY AFTERNOON THROUGH TUESDAY EVENING FOR STRONG WINDS AND LOW RELATIVE HUMIDITY FOR WESTERN OKLAHOMA PANAHANDLE AND WESTERN AND SOUTH-CENTRAL TEXAS PANHANDLE... * AFFECTED AREA...IN OKLAHOMA...CIMARRON AND TEXAS. IN TEXAS... DALLAM...SHERMAN...HANSFORD...HARTLEY...MOORE...HUTCHINSON...'
      }
    }, {
      'type': 'Flood Warning',
      'IssueAt': '2016-03-28T04:29:00',
      'ExpiresAt': '2016-03-29T19:00:00',
      'AffectedAreas': {
        'Area': [
          {
            'id': 'Okmulgee, OK'
          }, {
            'id': 'Pawhuska, OK'
          }, {
            'id': 'Tulsa, OK'
          }, {
            'id': 'Owasso, OK'
          }
        ]
      },
      'AlertTextShort': {
        'section': 'Tornado Watch in effect until March 29 at 7:00PM CDT by NWS.'
      },
      'AlertTextLong': {
        'section': '...FIRE WEATHER WATCH REMAINS IN EFFECT FROM TUESDAY AFTERNOON THROUGH TUESDAY EVENING FOR STRONG WINDS AND LOW RELATIVE HUMIDITY FOR WESTERN OKLAHOMA PANAHANDLE AND WESTERN AND SOUTH-CENTRAL TEXAS PANHANDLE... * AFFECTED AREA...IN OKLAHOMA...CIMARRON AND TEXAS. IN TEXAS... DALLAM...SHERMAN...HANSFORD...HARTLEY...MOORE...HUTCHINSON...'
      }
    }, {
      'type': 'Severe Thunderstorm Warning',
      'IssueAt': '2016-03-28T04:29:00',
      'ExpiresAt': '2016-03-29T19:00:00',
      'AffectedAreas': {
        'Area': [
          {
            'id': 'Okmulgee, OK'
          }, {
            'id': 'Pawhuska, OK'
          }, {
            'id': 'Tulsa, OK'
          }, {
            'id': 'Owasso, OK'
          }, {
            'id': 'Atoka, OK'
          }, {
            'id': 'Broken Arrow, OK'
          }, {
            'id': 'Bixby, OK'
          }, {
            'id': 'Prue, OK'
          }
        ]
      },
      'AlertTextShort': {
        'section': 'Tornado Watch in effect until March 29 at 7:00PM CDT by NWS.'
      },
      'AlertTextLong': {
        'section': '...FIRE WEATHER WATCH REMAINS IN EFFECT FROM TUESDAY AFTERNOON THROUGH TUESDAY EVENING FOR STRONG WINDS AND LOW RELATIVE HUMIDITY FOR WESTERN OKLAHOMA PANAHANDLE AND WESTERN AND SOUTH-CENTRAL TEXAS PANHANDLE... * AFFECTED AREA...IN OKLAHOMA...CIMARRON AND TEXAS. IN TEXAS... DALLAM...SHERMAN...HANSFORD...HARTLEY...MOORE...HUTCHINSON...'
      }
    }, {
      'type': 'Tornado Warning',
      'IssueAt': '2016-03-28T04:29:00',
      'ExpiresAt': '2016-03-29T19:00:00',
      'AffectedAreas': {
        'Area': [
          {
            'id': 'Cimarron, OK'
          }, {
            'id': 'Texas, OK'
          }
        ]
      },
      'AlertTextShort': {
        'section': 'Tornado Warning in effect until March 29 at 7:00PM CDT by NWS.'
      },
      'AlertTextLong': {
        'section': '...FIRE WEATHER WATCH REMAINS IN EFFECT FROM TUESDAY AFTERNOON THROUGH TUESDAY EVENING FOR STRONG WINDS AND LOW RELATIVE HUMIDITY FOR WESTERN OKLAHOMA PANAHANDLE AND WESTERN AND SOUTH-CENTRAL TEXAS PANHANDLE... * AFFECTED AREA...IN OKLAHOMA...CIMARRON AND TEXAS. IN TEXAS... DALLAM...SHERMAN...HANSFORD...HARTLEY...MOORE...HUTCHINSON...'
      }
    }
  ]
};
//temp for testing

const isEmptyObject = function(obj){
  let name;
  for(name in obj){ return false; }
  return true;
};

const isArray = function(obj){
  return Object.prototype.toString.call(obj) === '[object Array]';
};

class WeatherTakeover extends Component {
  constructor(props){
    super(props);
    this.affiliate = this.props.affiliate;
    this.stationCall = this.affiliate == 'kotv' ? 'newson6' : 'news9';
    this.stationTitle = this.affiliate == 'kotv' ? 'News On 6' : 'News 9';
    this.assetUrl = 'http://ftpcontent.worldnow.com/kotv/custom/wxtakeover/';
    this.social = {
      fb: `https://www.facebook.com/sharer/sharer.php?u=http%3A//www.${this.stationCall}.com/`,
      twitter: `https://twitter.com/home?status=Watch%20Live%20-%20Severe%20Weather%20Coverage%20on%20http%3A//www.${this.stationCall}.com%20%23okwx`,
      mail: `mailto:?&subject=Watch Live - Severe Weather Coverage&body=Watch%20Live%20-%20Severe%20Weather%20Coverage%20on%20http%3A//www.${this.stationCall}.com`
    }

    if(typeof window == 'object'){
      if(window.WNVideoWidget)
        var WNVideoWidget = window.WNVideoWidget;
      else
        console.error('WNVideoWidget couldnt be found!');
    }

    this.state = {
      banners: [],
      warnings: [],
      ads: [],
      hasInjected: false,
      watchExpanded: false,
      feedUrl: `http://kotv.com/api/GetWxEvents.ashx?type=json&cmd=AppEvents&id=4&station=${this.affiliate}`,
      settings: {
        hostDomain: this.affiliate == 'kotv' ? 'newson6' : 'news9',
        stationName: this.affiliate == 'kotv' ? 'News On 6' : 'News 9',
        weatherIcon: this.affiliate == 'kotv' ? `${this.assetUrl}6weathericon.png` : `${this.assetUrl}9weathericon.png`,
        weatherIconLarge: this.affiliate == 'kotv' ? `${this.assetUrl}6weathericon_lg.png` : `${this.assetUrl}9weathericon_lg.png`,
        textMsg: this.affiliate == 'kotv' ? 'Travis' : 'David',
        videoImg: this.affiliate == 'kotv' ? `${this.assetUrl}wx-takeover-tmeyer.jpg` : `${this.assetUrl}wx-takeover-dpayne.jpg`,
        warnName: this.affiliate == 'kotv' ? 'WARN Radar' : 'ESP Radar',
        warningPage: this.affiliate == 'kotv' ? 'http://www.newson6.com/weatheralerts' : 'http://www.news9.com/weatheralerts',
        warnLink: this.affiliate == 'kotv' ? 'http://www.newson6.com/category/158741/warn-interactive-live-radar' : 'http://www.news9.com/category/158742/interactive-esp-radar',
        streetLink: this.affiliate == 'kotv' ? 'http://www.newson6.com/category/121189/weather-radar' : 'http://www.news9.com/category/118562/weather-radar-page'
      }
    }
  }

  componentDidMount() {
    //ajax call for wx data
    if(!testData){
      let bannerController = new BannerController(this.affiliate == 'kotv'? 1 : 2);
      bannerController.getCache(this.addBanners);
      fetch(this.state.feedUrl)
        .then((response) => response.json())
        .then((json) => { this.addWarnings(json); })
        .catch((error) => {
          console.log(`Error while retrieving warning data: ${error}`);
        });
    } else {
      this.addBanners(testBannerData);
      this.addWarnings(testDataObj);
    }


    let hoverZone = document.querySelector('#hoverZone');
    let watchesAndWarnings = document.querySelector('#watchesAndWarnings');
    let closeWW = document.querySelector('#closeWW');

    hoverZone.addEventListener('click', (e) => {
      if(!this.state.watchExpanded){
        this.setState({
          watchExpanded: true
        });
        watchesAndWarnings.classList.add('expanded');
      }
    });

    closeWW.addEventListener('click', (e) => {
      this.setState({
        watchExpanded: false
      });
      watchesAndWarnings.classList.remove('expanded');
    });
  }

  addBanners = (data) => {
    if(!isEmptyObject(data)){
      let tmpArr = [];
      data.forEach((banner, i) => {
        if(banner['EncoderUrls'] && banner['Content'].toLowerCase().indexOf('weather') > -1){
          banner['EncoderUrls'].forEach((encoder) => {
            if(encoder['EncoderUrlTypeId'] === 1){ banner['DesktopUrl'] = encoder['Url']; }
            else if(encoder['EncoderUrlTypeId'] === 2){ banner['MobileUrl'] = encoder['Url']; }
          });
          tmpArr.push(banner);
        }
      });
      this.setState({
        banners: tmpArr
      });
    }
  }

  addWarnings = (data) => {
    if(!isEmptyObject(data)){
      let warnings = data['Alert'];
      let tmpArr = [];
      let tornadoArr = [];
      let otherArr = [];

      let tornadoWarnings = warnings.filter(warning => warning.type === 'Tornado Warning');
      let otherWarnings = warnings.filter(warning => warning.type !== 'Tornado Warning');
      tornadoWarnings.forEach((tornadoWarning) => {
        let countylist = tornadoWarning['AffectedAreas']['Area'];
        if(isArray(countylist)){
          countylist.forEach((warning) => {
            tornadoArr.push({county: warning.id, type: 'Tornado Warning'});
          });
        } else {
          tornadoArr.push({county: countylist.id, type: 'Tornado Warning'});
        }
      });
      otherWarnings.forEach((otherWarning) => {
        let warningType = otherWarning['type'];
        let countylist = otherWarning['AffectedAreas']['Area'];
        if(isArray(countylist)){
          countylist.forEach((warning) => {
            otherArr.push({county: warning.id, type: warningType});
          });
        } else {
          otherArr.push({county: countylist.id, type: warningType});
        }
      });
      tornadoArr.sort(function(a,b){ return a.county.localeCompare(b.county); });
      otherArr.sort(function(a,b){ return a.county.localeCompare(b.county); });
      tmpArr = tornadoArr.concat(otherArr);
      this.setState({
        warnings: tmpArr
      });
    }
  }

  changeTabs = (event, type) => {
    event.preventDefault();
    let wxtakeover = document.getElementById('wxTakeover');
    if(!wxtakeover.className === type){
      wxtakeover.className = type;
    }
  }

  playStream = (event, liveStreamURL, mobileURL, liveStreamTitle, mask, autoPlay = true) => {
    /* only onclick event so we can use the window object */
    event.preventDefault();
    window.teststreamarr = [event, liveStreamURL, mobileURL, liveStreamTitle, mask, autoPlay];
    let startGraphic = document.getElementById('startGraphic');
    if(!startGraphic.classList.contains('off')){ startGraphic.classList.add('off'); }
    let targ = liveStreamURL === 'first' ? document.querySelector('.ls_option[data-ind="0"]').children[0] : event.target;
    window.testtarg = targ;
    /* check to make sure its not already the selected stream */
    if(!targ.parentElement.classList.contains('selected')){
      console.log('not selected');
      let selects = document.querySelectorAll('.ls_option.selected');
      if(selects.length){ selects[0].classList.remove('selected'); }
      targ.parentElement.classList.add('selected');
      let preroll;
      if(liveStreamURL === 'first'){
        let firstBanner = this.state.banners[0];
        liveStreamURL = firstBanner['DesktopUrl'];
        mobileURL = firstBanner['MobileUrl'];
        liveStreamTitle = firstBanner['Description'];
        mask = firstBanner['BannerInfoTypeMask'];
      }
      preroll = (mask & 0x40) > 0;

      let domCanvasId = 'divWNVideoCanvas23987';
      if(WNVideoWidget){
        let wNVideoCanvas = new WNVideoWidget('WNVideoCanvas', domCanvasId);
        wNVideoCanvas.SetStylePackage('dark');
        wNVideoCanvas.SetVariable('widgetId', 'widget_id_placeholder');
        wNVideoCanvas.SetVariable('addThisDivId', `${domCanvasId}_addThis`);
        wNVideoCanvas.SetVariable('incanvasAdDivId', `${domCanvasId}_adDiv`);
        wNVideoCanvas.SetSkin(window.CANVAS_SKINS.flat.ebony);
        wNVideoCanvas.SetVariable('toolsShareButtons', 'link,share');
        wNVideoCanvas.SetVariable('overlayShareButtons', 'link,share');
        wNVideoCanvas.SetVariable('transportShareButtons', 'cc');
        wNVideoCanvas.SetWidth('auto');
        wNVideoCanvas.SetHeight('auto');
        wNVideoCanvas.SetVariable('isAutoStart', autoPlay);
        wNVideoCanvas.SetFlashLiveStream({
          strUrl: liveStreamURL,
          strHeadline: `${liveStreamTitle} - ${this.stationTitle}`,
          strSummaryImageUrl: '',
          strAdTag: 'weather',
          hasPreroll: preroll,
          mobileStreams: [{ url: mobileURL, type: 'video/mp4' }]
        });
        wNVideoCanvas.RenderWidget();
      }
    }
  }


  render(){
    //temp
    let bannerAmt = 2;
    //temp
    let extraClass = this.state.warnings.length < 4 ? 'disable' : '';
    let lsOptionClass = `amt${this.state.banners.length}`;
    let rightClass = `right_section ${extraClass}`;
    return (
      <div  className='row live gnm-weather-takeover'>
        <div className='col-xl-9 col-xs-12'>
          <div className='row'>
            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-7 col-xs-12'>
              <h2 className='white text-center overflow-hidden'>Severe Weather Coverage</h2>
              <div className='wxLivestream'>
                <div id='wxLSPlayer'>
                  <a id='startGraphic' href='#' onClick={(e) => { this.playStream(e, 'first');}}>
                    <div className='blackhover' />
                    <i className='fa fa-play-circle-o' />
                    <img src={this.state.settings.videoImg} />
                  </a>
                  <div id='divWNWidgetsContainer23987'><div id='divWNVideoCanvas23987' /></div>
                </div>
                <div id='wxLSoptions' className={lsOptionClass}>
                  <h3>View Live Feeds</h3>
                  {this.state.banners.map((banner, i) => {
                    return (
                      <div className='ls_option' key={i} data-ind={i}>
                        <a href='#' onClick={(e) => { this.playStream(e, banner['DesktopUrl'], banner['MobileUrl'], banner['Description'], banner['BannerInfoTypeMask']); }} className='ls_picker' data-encoder-url={banner['DesktopUrl']} data-encoder-mobile={banner['MobileUrl']} data-mask={banner['BannerInfoTypeMask']}>{banner['Description']}</a>
                        <span className='streaming'>Streaming</span>
                      </div>
                    );
                  })}
                  <div className='clearfix' />
                </div>
              </div>
              <div className='row hidden-xl'>
                <div className='upload col-xs-6'>
                  <div className='row'>
                    <div className='col-xs-12'>
                      <div className='inner_border'>
                        <div className='row'>
                          <div className='col-xs-3'>
                            <img className='img-responsive' src={this.state.settings.weatherIconLarge} />
                          </div>
                          <div className='col-xs-9'>
                            <h3>Download the {this.stationTitle} Weather App. </h3>
                            <p>Text <b>{this.state.settings.textMsg}</b> to <b>79640</b>.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='safety col-xs-6'>
                  <div className='row'>
                    <div className='col-xs-12'>
                      <div className='inner_border'>
                        <div className='row'>
                          <div className='col-xs-12'>
                            <h3>Help Others Stay Safe</h3>
                            <p>Alert others about severe weather as it approaches.</p>
                          </div>
                        </div>
                        <div className='social row'>
                          <div className='col-xs-4 fb'>
                            <a id='fbbtn' href={this.social.fb} target='_blank'>
                              <button id='shareFacebook' type='button'>
                                <i className='fa fa-facebook' />
                              </button>
                            </a>
                          </div>
                          <div className='col-xs-4 twit'>
                            <a href={this.social.twitter} target='_blank'>
                              <button id='shareTwitter' type='button'>
                                <i className='fa fa-twitter' />
                              </button>
                            </a>
                          </div>
                          <div className='col-xs-4 email'>
                            <a href={this.social.mail}>
                              <button id='shareEmail' type='button'>
                                <i className='fa fa-envelope' />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-5 hidden-xs'>
              <div className='watcheswarnings'>
                <div className='watchheader'>
                  <h3>Watches and Warnings</h3>
                  <p>Get The Latest Info For Your County</p>
                </div>
                <div className='warninglist'>
                  <ul>
                    {this.state.warnings.slice(0, 3).map((warning, i) => {
                      return (
                        <li className={warning.type.toLowerCase()} key={i}>
                          <a href={this.state.settings.warningPage} target='_blank'>
                            <i className='fa fa-circle' />
                            <span className='county'>{warning.county}</span>
                            <span className='warning'>{warning.type}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className='radars'>
                  <h3>Radars</h3>
                  <div className='radar_inner'>
                    <img src='http://aws.kotv.com/kotv/comp/600x330/statewide_anim.gif' />
                    <div className='row'>
                      <div className='col-xs-6'>
                        <a href={this.state.settings.warnLink} target='_blank'><button id='warnRadar' type='button'>{this.state.settings.warnName}</button></a>
                      </div>
                      <div className='col-xs-6'>
                        <a href={this.state.settings.streetLink} target='_blank'><button id='streetRadar' type='button'>Street Level Radar</button></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id='div-gpt-ad-614486550423061904-1' className='ad' />
                <div className='downloadapp row'>
                  <div className='col-xs-3'>
                    <img className='img-responsive' src={this.state.settings.weatherIconLarge} />
                  </div>
                  <div className='col-xs-9'>
                    <h3>Download The Weather App. </h3>
                    <p>Text <b>{this.state.settings.textMsg}</b> to <b>79640</b>.</p>
                  </div>
                </div>
                <div className='safety row'>
                  <div className='col-xs-12'>
                    <h3>Share and Help Others Stay Safe</h3>
                  </div>
                  <div className='col-xs-12'>
                    <div className='row'>
                      <div className='col-xs-4'>
                        <a id='fbbtn' href={this.social.fb} target='_blank'>
                          <button id='shareFacebook' type='button'>
                            <i className='fa fa-facebook' />
                          </button>
                        </a>
                      </div>
                      <div className='col-xs-4'>
                        <a href={this.social.twitter} target='_blank'>
                          <button id='shareTwitter' type='button'>
                            <i className='fa fa-twitter' />
                          </button>
                        </a>
                      </div>
                      <div className='col-xs-4'>
                        <a href={this.social.mail}>
                          <button id='shareEmail' type='button'>
                            <i className='fa fa-envelope' />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={rightClass} id='watchesAndWarnings'>
                <h3>Watches and Warnings</h3>
                <div id='hoverZone'>
                  <button id='allWarnings' type='button'>
                    <span>See All</span>
                    <i className='fa fa-arrow-left' />
                  </button>
                  <div className='rightzone' />
                </div>
                <button id='closeWW' type='button'>
                  <span>Close</span>
                  <i className='fa fa-arrow-right' />
                </button>
                <div className='warninglist'>
                  <ul>
                    {this.state.warnings.map((warning, i) => {
                      return (
                        <li className={warning.type.toLowerCase()} key={i}>
                          <a href={this.state.settings.warningPage} target='_blank'>
                            <i className='fa fa-circle' />
                            <span className='county'>{warning.county}</span>
                            <span className='warning'>{warning.type}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 hidden-xs hidden-sm hidden-md hidden-lg'>
          <div className='ad ad_zone'>
            <img src='http://ftpcontent.worldnow.com/kotv/test/wx/test_wxtakeover_ad.jpg' />
          </div>
        </div>
        <div id='mobileAlerts' className='col-xs-12 hidden-sm hidden-md hidden-lg hidden-xl'>
          <h3>Alerts</h3>
          <h4>Get The Latest Info For Your County</h4>
          <div className='warninglist'>
            <ul>
              {this.state.warnings.map((warning, i) => {
                return (
                  <li className={warning.type.toLowerCase()} key={i}>
                    <a href={this.state.settings.warningPage} target='_blank'>
                      <i className='fa fa-circle' />
                      <span className='county'>{warning.county}</span>
                      <span className='warning'>{warning.type}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div id='mobileRadar' className='col-xs-12 hidden-sm hidden-md hidden-lg hidden-xl'>
          <h3>Radars</h3>
        </div>
        <div id='mobileTabs' className='col-xs-12 hidden-sm hidden-md hidden-lg hidden-xl'>
          <ul>
            <li><a href='#' onClick={(e) => { this.changeTabs(e, 'live'); }}>Live</a></li>
            <li><a href='#' onClick={(e) => { this.changeTabs(e, 'alerts'); }}>Alerts</a></li>
            <li><a href='#' onClick={(e) => { this.changeTabs(e, 'radars'); }}>Radars</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WeatherTakeover;
