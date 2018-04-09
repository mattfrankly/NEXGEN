import React, {Component, PropTypes} from 'react';
import ForecastController from '../ForecastController';
import ZipInput from '../ZipInput'

class CurrentConditions extends Component {
  constructor(props) { //gives us acces to props, fires long before page load
    super(props) //assigns props to this.props
    this.affiliate = props.affiliate;
//     this.forecast = new ForecastController(props.affiliate)

    this.state = {
      radarImg: 'https://ftpcontent.worldnow.com/kotv/MyOwnRadar/kotv/ssite/110x62/main_anim.gif?' + Date.now()
    }
  }

  componentDidMount() {
      console.log("*** CurrentConditions::componentDidMount");
      ForecastController.get((data)=>{
        this.setState(data)
      })
  }

  render() {
    return (
      <div className='gnm-current-conditions'>
          <ZipInput>
            <a  className={' hidden-xs hidden-sm hidden-md map-link' + (this.state.temp
                  ? ''
                  : ' hidden')/* on one occassion, this value was unset */}>{this.state.city}, {this.state.state}
                  <span className='glyphicon glyphicon-map-marker' />
            </a>
          </ZipInput>

          <img className='pull-left condition-icon' src={this.state.conditionIcon} />
          <span className={'pull-left temperature' + (this.state.temp
              ? ''
              : ' hidden')/* on one occassion, this value was unset */}>{this.state.temp}&deg;</span>
          <a href='#' className='hidden-xs hidden-sm hidden-md  radar-img pull-left'>
            <img className='' src={this.state.radarImg} alt='radar image' />
          </a>
          <span className="feels-like hidden-xs hidden-sm"> Feels like {this.state.feelsLike}&deg;</span>
      </div>
    )
  }
}

export default CurrentConditions;
