import React, { Component} from 'react';
import SkyCam from './SkyCam';
import RadarCallToAction from './RadarCallToAction';
import WeatherSummary from './WeatherSummary';
import Almanac from './Almanac'
import SevenDayForecast from './SevenDayForecast'
import ReactTempChart from './ReactTempChart';

class WeatherBlock extends Component{
  constructor(props){
    super(props)
    this.affiliate = this.props.affiliate
  }

  render() {
    return (
      <div >
        <div className="row">
          <div className="col-md-9">
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
            <div className="row">
              <div className="col-xs-12">
                  <ReactTempChart affiliate={this.affiliate} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <RadarCallToAction title="WARN" />
              </div>
              <div className="col-md-4">
                <RadarCallToAction title="U-Control" />
              </div>
              <div className="col-md-4">
                <SkyCam affiliate={this.affiliate} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Almanac affiliate={this.affiliate} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            bunches of ads go here, we love ads
          </div>
        </div>
      </div>
    );
  }

}

export default WeatherBlock;
