import React, {Component} from 'react';

class WeatherAppAdvert extends Component {
  constructor(props) {
    super(props)
    this.affiliate = props.affiliate
  }
  render() { // REQUIRED
    return (
      <div className='gnm-weather-app-advert row'>
        <div className='col-xs-12 '>
          <h3 className='hidden-sm hidden-xs'>Your Weather, Whenever, Whenever</h3>
          <div className='row'>
            <div className='col-xs-4 hidden-sm hidden-xs '>
              <img className='img-responsive' src='http://ftpcontent.worldnow.com/griffin/gnm/testing/wx/coffeeapp.jpg' alt='Download Our App'/>
            </div>
            <div className='col-xs-12 col-md-8'>
              <h4 className='hidden-sm hidden-xs'>
                Weather alerts, daily forecast, and more at the touch of a button
              </h4>
              <p className='hidden-sm hidden-xs'>
                Weather at your fingertips, safety at the touch of a button, not to mention the exhaustive list of items that could not possible be listed here for the lack of space and time. Trust us, this app is totally awesome.
              </p>
              <h4 className='hidden-sm hidden-xs'>Did we also mention that it's free?</h4>
              <h4 className='visible-xs-block visible-sm-block'>Download the FREE Weather App</h4>
              <div className='apps'>
                <a href={this.affiliate == 'kotv'
                  ? 'https://itunes.apple.com/us/app/news-on-6-weather/id429007990?mt=8'
                  : 'https://itunes.apple.com/us/app/news-9-weather/id428652359?mt=8'} className='ios' title='Download the Weather App'>
                  <img src='http://ftpcontent.worldnow.com/kotv/custom/apps/appstorebadge.svg' alt='Apple App Store'/>
                </a>
                <a className='android' href={this.affiliate == 'kotv'
                  ? 'https://play.google.com/store/apps/details?id=com.wdtinc.android.KOTV&hl=en'
                  : 'https://play.google.com/store/apps/details?id=com.wdtinc.android.KWTV&hl=en'} title='Download the Weather App'>
                  <img className='google' src='http://ftpcontent.worldnow.com/kotv/custom/apps/google-play-badge.png' alt='Google Play Store'/>
                </a>
                <span className='text-me'>
                  or text 
                  <b >
                    {this.affiliate == 'kotv'
                      ? ' 6CONNECT '
                      : ' 9CONNECT '}</b>
                  to
                  <b >&nbsp;79640&nbsp; from your smart phone</b>
                </span>
              
              </div>
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherAppAdvert
