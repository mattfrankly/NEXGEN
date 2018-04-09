import React, {Component} from 'react';
import ForecastController from '../ForecastController'

class SevenDayForecast extends Component{
  constructor(props){
    super(props)
    this.affiliate = this.props.affiliate;
    this.state = {
      forecasts: []
    }
    //this.ForecastController = new ForecastController(this.affiliate)
    this.maxTemp = 0;
  }

  componentWillMount(){
    ForecastController.get((data)=>{
      this.massageForecast(data)
    })
  }

  massageForecast(data){
    this.setState(data)
  }



  render(){
    if(this.state.forecasts.length < 7)
      return null
    return(
      <div className="gnm-seven-day-forecast"  >
        <div style={{width: (this.affiliate == 'kotv'? 7:9)*100 +'px'}} className="hidden-md hidden-lg"> {/* 100 is built in to CSS*/}
        {this.state.forecasts.map((f,i,all)=>{
          return   <Day {...f} />

        }).slice(0,this.affiliate == 'kotv' ? 7:9)}
        </div>
        <div className="visible-md-block visible-lg-block"> {/* 100 is built in to CSS*/}
        {this.state.forecasts.map((f,i,all)=>{
          return   <Day {...f} affiliate={this.affiliate}/>

        }).slice(0,this.affiliate == 'kotv' ? 7:9)}
        </div>
      </div>
    )

  }
}

class Day extends Component{
  constructor(props){
    super(props)
    this.state={
      open: false
    }
  }
  toggle = () => {
    this.setState({open: !this.state.open})
  }

  render(){
    return (
              <div className={" day " + this.props.affiliate} onClick={this.toggle}>
                <div className= "summary" >
                  <div className="title ">
                    <h2 className="visible-sm-block visible-xs-block">{this.props.date.substring(0,3)}</h2>
                    <h2 className={"hidden-sm hidden-xs " + this.props.date}>{this.props.date}</h2>
                  </div>
                  <div className="hidden-xs hidden-sm condition-description">{this.props.condition}</div>
                  <div className="img">
                    <img src={this.props.conditionicon} className="img-responsive"></img>
                  </div>

                  <h3>{this.props.high}&deg;</h3>
                  <h4>{this.props.low}&deg;</h4>
                  <h5 >
                    {this.props.precipitation ? <span className="fa fa-umbrella"/> : null}
                    {this.props.precipitation ? this.props.precipitation : null}
                  </h5>
                  <div className="details">View Details<span className="arrow-right"></span></div>
                </div>
                <div className="full-info" style={{display: (this.state.open ? 'block': 'none')}} onClick={this.toggle}>
                  <div className="full-title">{this.props.extendedTitle} <span className="glyphicon glyphicon-remove"></span></div>
                  <div style={{padding:'10px'}}>
                    <div className="condition">{this.props.condition}</div>
                    <img className=" fixed-width" src={this.props.conditionicon}></img>
                    <span className="high">{this.props.high}&deg;</span>
                    <ul>
                      <li>Chance of Rain</li>
                      <li style={{fontSize:'24px',fontWeight:'500'}}>{this.props.precipitation? this.props.precipitation : '0%'}</li>
                    </ul>
                    <ul>
                      <li>Wind</li>
                      <li >{this.props.winddirection + ' ' + this.props.windspeedmax + ' MPH'}</li>
                    </ul>
                    <ul>
                      <li>Humidty</li>
                      <li >{'NaN'}</li>
                    </ul>
                    <ul>
                      <li>UV</li>
                      <li >{'NaN'}</li>
                    </ul>
                    <ul>
                      <li>Sunrise</li>
                      <li >{new Date(this.props.sunrise).toLocaleTimeString()}</li>
                    </ul>
                    <ul>
                      <li>Sunset</li>
                      <li >{new Date(this.props.sunset).toLocaleTimeString()}</li>
                    </ul>
                    <p>{this.props.description}</p>
                  </div>



                </div>
              </div>
          )
  }
}


export default SevenDayForecast
