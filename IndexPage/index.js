import React, { Component} from 'react';
import HomePageTakeover from '../HomePageTakeover'
import WeatherTakeover from '../WeatherTakeover'
import TopStories from '../TopStories'

const HomePageTakeoverConfig = require('../HomePageTakeover/package.json')
const WeatherTakeoverConfig = require('../WeatherTakeover/package.json')
const TopStoriesConfig = require('../TopStories/package.json')

console.log('Home Page Takeover Running as: ',HomePageTakeoverConfig.defaultProps.affiliate)
console.log('Weather Takeover Running as: ',WeatherTakeoverConfig.defaultProps.affiliate)
console.log('TopStories Running as: ',TopStoriesConfig.defaultProps.affiliate)

export default class IndexPage extends Component{
  constructor(props){
    super(props)
    // this.affiliate = this.props.affiliate
  }


  render() {
    return (
      <div>
        <HomePageTakeover {...HomePageTakeoverConfig.defaultProps}/>
        <WeatherTakeover {...WeatherTakeoverConfig.defaultProps} />
        <TopStories {...TopStoriesConfig.defaultProps} />
      </div>
    );
  }
}
