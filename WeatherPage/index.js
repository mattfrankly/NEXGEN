import React, { Component} from 'react';
import SkyCam from './SkyCam';
import RadarCallToAction from './RadarCallToAction';
import WeatherSummary from './WeatherSummary';
import Almanac from './Almanac'
import SevenDayForecast from './SevenDayForecast'
//import ReactTempChart from './ReactTempChart';
import WeatherAppAdvert from './WeatherAppAdvert';



export default class WeatherPage extends Component{
  constructor(props){
    super(props)
    this.affiliate = props.affiliate

  }

  render() {
    return (
      <div className="gnm-weather-page">
        <div className="row">
          <div className="col-md-6 weather-page-title">
            <h1 className="h4">Weather Conditions and Forecast</h1>

          </div>
          <div className="col-md-6 hidden-xs hidden-sm">
              <div className="pull-right sponsorship">Sponsored By <b>Hard Rock Hotel & Casino</b></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-9">
            <div className="row">
              <div className="col-xs-12">
                <WeatherSummary affiliate={this.affiliate} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <SevenDayForecast affiliate={this.affiliate}/>
              </div>
            </div>
            <div className="row  hidden-xs hidden-sm">
              <div className="col-md-8 ">
                <h5>Today's Conditional Weather Stuff</h5>
                <p>We aren't sure the status of these things </p>
              </div>
              <div className="col-md-4">
                <SkyCam affiliate={this.affiliate} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h5 className="radar-title">Interactive Radars</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <RadarCallToAction title="WARN" />
              </div>
              <div className="col-xs-6">
                <RadarCallToAction title="U-Control" />
              </div>
            </div>
          </div>
          <div className="col-md-3 hidden-xs hidden-sm">
            bunches of ads go here, we love ads
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <WeatherAppAdvert affiliate={this.affiliate} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-9">
            <div className="row">
              <div className="col-xs-12">
                <h5 className="radar-title">Weather Almanac and Related Weather Information</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12" style={{paddingLeft:'0px',paddingRight:'0px'}}>
                {//<ReactTempChart affiliate={this.affiliate} />
              }
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Almanac affiliate={this.affiliate} />
              </div>
            </div>
          </div>

          <div className="col-md-3 hidden-xs hidden-sm">
            <span>Some More Ads, we love em</span>
          </div>
        </div>



      </div>
    );
  }

}
