import React, {Component} from 'react'
import ForecastController from '../ForecastController'
import VideoPlayer from '../VideoPlayer'
import ZipInput from '../ZipInput'


const circumference = 160;
class WeatherSummary extends Component{
  constructor(props){
    super(props)
    this.affiliate = props.affiliate;
    this.state = {
      updated: '',
      percent: 0,
      weatherVideoSrcs : ''
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

  componentDidMount(){
    // let forecast = new ForecastController(this.affiliate)
    ForecastController.get((data)=>{
      this.setState(data)
    })
    this.Ajax('http://www.newson6.com/category/121565/weather-videos?clienttype=json').then((data)=>{
      let json = JSON.parse(data)

      try{
        let srcs = json.clips[0].uri.map(function(feed){
            feed.src = decodeURIComponent(feed.url)
            return feed
        }).filter(function(feed){
          if(feed.type =="video/mp4" )
            return true
        })

        this.setState({weatherVideoSrcs: srcs});

      }
      catch(err){
        console.log(err)
      }

    })
  }

  animateSvg(){
    this.setState({ percent: 0,
                    dynamicTemp: 0 })

    let tempIncrement = Math.ceil(this.state.temp/30)
    let newTemp = 0;
    let newPercent = 0;
    let loop = setInterval(()=>{
      newTemp = newTemp + tempIncrement;
      newPercent = Math.round(newTemp*100/115)
      this.setState({ percent: newPercent,
                      dynamicTemp: newTemp})
      if(newTemp >= this.state.temp - tempIncrement){
        clearInterval(loop)
        /* last cycle clears rounding errors */
        this.setState({ percent: Math.round(this.state.temp*100/115),
                        dynamicTemp: Math.round(this.state.temp)})
        return null;
      }
    },10)
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.temp != prevState.temp && this.state.temp != 0)
      this.animateSvg()
  }

  rgb(){
    var red = Math.round(this.state.percent*2.55);
    var green = 0 ;
    var blue = Math.round((100 - this.state.percent)*2.55 );
    return `rgb(${red},${green},${blue})`
  }

  render(){
    return(
      <div className=" row">
        <div className="col-xs-12 hidden-sm hidden-xs">
          <div className="row gnm-weather-summary">
            <div className="col-xs-8 visible-md-block visible-lg-block ">
              <div className="important-things">
                <div>
                  <span>{this.state.updated} in </span>
                  <ZipInput>
                    <a className="dark">{this.state.city}, {this.state.state}</a>
                  </ZipInput>
                </div>
                <div  className="icon-container">
                  <svg viewBox="0 0 100 50" fill="transparent">
                    <path d="M 50,50 m -49,0 a 49,49 0 1 1 98,0" stroke="#edebeb" strokeWidth="1" fillOpacity="0"></path>
                    <path d="M 50,50 m -49,0 a 49,49 0 1 1 98,0"
                      stroke={this.rgb()}
                      strokeWidth="2"
                      fillOpacity="0"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference * (1 - this.state.percent/100)}></path>
                  </svg>
                  <span className="icon-box">
                    <img
                      src={this.state.conditionIcon}
                      alt={this.state.conditionText} />
                  </span>
                  <span className="temperature" style={{color: this.rgb()}}>{this.state.dynamicTemp|| ' '}</span>
                  <div className="hidden-xs">{this.state.conditionText|| ' '}</div>
                  <div className="visible-md-block">Visibility {this.state.visibility|| ' '} mi</div>
                </div>
                <div className="detail">
                  <div className="">
                    <span>Feels Like</span>
                    <h4>{this.state.feelsLike|| ' '}<sup>&deg;</sup></h4>
                  </div>
                  <div className="">
                    <span>Humidity</span>
                    <h4>{this.state.humidity|| ' '}%</h4>
                  </div>
                  <div className="">
                    <span>Dew Point</span>
                    <h4>{this.state.dew|| ' '}<sup>&deg;</sup></h4>
                  </div>
                  <div className=" visible-lg-block visible-xl-block pull-right">
                    <span>Visibility</span>
                    <h4>{this.state.visibility|| ' '} mi</h4>
                    <a className="dark small" href='#'>Additional Weather Details</a>
                  </div>
                </div>
                <div className="detail">
                  <div className="">
                    <span>Wind Speed</span>
                    <h6>{this.state.windSpeed || ' '} mph</h6>
                  </div>
                  <div className="">
                    <span>Wind Direction</span>
                    <h6>{this.state.windDirection || ' '}</h6>
                  </div>
                  <div className="">
                    <span>Pressure</span>
                    <h6>{this.state.pressure || ' '} in</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="player-container pull-right">
                <VideoPlayer  sources={this.state.weatherVideoSrcs}  />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 visible-xs-block visible-sm-block ">
          <div className="row no-gutter gnm-weather-summary-small">
            <div className="col-xs-12">
              <div>
                <span>{this.state.updated} in  </span>
                <ZipInput>
                  <a href="#">{this.state.city}, {this.state.state}<span className="glyphicon glyphicon-map-marker"></span></a>
                </ZipInput>
              </div>
            </div>
            <div className="col-xs-7">
              <img src={this.state.conditionIcon}  alt={this.state.conditionText} />
              <h2>{this.state.dynamicTemp}<sup>&deg;</sup></h2>
              <p>{this.state.conditionText}</p>
            </div>
            <div className="col-xs-5">
              <VideoPlayer  sources={this.state.weatherVideoSrcs} />
            </div>
            <div className="col-xs-6 button-radar">
              <a href="#" className="radar">{this.affiliate == 'kotv' ? 'WARN Radar' : 'ESP Radar'}</a>
            </div>
            <div className="col-xs-6 button-radar">
                <a href="#" className="radar">U-Control Radar</a>
            </div>
            <div className="col-xs-12">
              <ul>
                <li>
                  <span>Feels Like</span> <h4>{this.state.feelsLike}<sup>&deg;</sup></h4>
                </li>
                <li>
                  <span>Dew Point</span> <h4>{this.state.dew}<sup>&deg;</sup></h4>
                </li>
                <li>
                  <span>Humidity</span> <h4>{this.state.humidity}%</h4>
                </li>
                <li>
                  <span>Pressure</span> <h4>{this.state.pressure} in</h4>
                </li>
                <li>
                  <span>Wind Speed</span> <h4>{this.state.windSpeed}<sup>&deg;</sup></h4>
                </li>
                <li>
                  <span>Wind Direction</span> <h4>{this.state.windDirection}<sup>&deg;</sup></h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherSummary;
