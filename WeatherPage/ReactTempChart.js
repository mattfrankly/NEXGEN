import React, {Component} from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import ForecastController from '../ForecastController'
class ReactTempChart extends  Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
    this.container = null
    this.affiliate = this.props.affiliate
    this.initTime = Date.now()
    // this.ForecastController = new ForecastController(this.affiliate)
  }

  componentDidMount(){ // if using componentWillMount, sometimes the data comes in before mounting, and there is now div width
    ForecastController.get((data)=>{
      this.setState(this.massageData(data))
    })
  }



  massageData(data){
    this.highToday = -999
    this.lowToday = 999;
    data = data.hourly.map((a,i,all)=>{
      let d = new Date(a.time_local)
      let hrs = d.getHours() +1

      if(hrs < 12 )
        a.shortTime = hrs  + 'AM'
      else
        a.shortTime = hrs===12 ? '12PM' : hrs - 12 + 'PM'

      a.temp_F = parseInt(a.temp_F,10)
      if(a.temp_F > this.highToday)
        this.highToday = a.temp_F
      if(a.temp_F < this.lowToday)
        this.lowToday = a.temp_F

      a.pop = parseInt(a.pop,10)
      a.wnd_spd_mph = parseInt(a.wnd_spd_mph,10)

      return a
    })
    return {data : data}

  }

  tempTip(props){
    if(!props.active)
      return null
    return  <span className="temp-label">{props.payload[0].value}&deg;F</span>

  }
  windTip(props){
    if(!props.active)
      return null
    return(
      <span className="wind-label">
        <p >{props.payload[0].value} mph</p>
        <p>{props.payload[1].value}% Precip</p>
      </span>
    )
  }



  render () {
  	return (
      <div className="gnm-react-temp-chart" ref={(c) => { this.container = c }} >
        { (this.container && this.state.data.length > 0 ) ? (
          <div>
            <span className='title'>48 Hour Temperature Graph</span>
            <AreaChart width={this.container.offsetWidth} height={200}  data={this.state.data} syncId={'unique' + this.initTime}
              margin={{ top: 0, right: 0, left: 0, bottom:0 }}>
              <defs>
                <linearGradient id="temps_color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#666666" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#666666" stopOpacity={0}/>
                </linearGradient>
              </defs>
             <XAxis dataKey="shortTime" hide />
             <YAxis yAxisId="left"  unit="F" name="Temp" style={{fontSize:'12px'}}/>
             <YAxis yAxisId="right" orientation="right"  unit="%" style={{fontSize:'12px'}}/>
             <CartesianGrid strokeDasharray="3 3" />
             <Tooltip content={this.tempTip} />
             <Area yAxisId="left" type="monotone" dataKey="temp_F" stroke="black" fillOpacity={1} fill="url(#temps_color)" activeDot={{r: 2}} dot={false} padding={{ left: 0, right: 0 }}/>
            </AreaChart>
            <div className="titles">
              <span>Wind Speed</span>
              <span >Precipitation</span>
            </div>
            <AreaChart width={this.container.offsetWidth} height={100}  data={this.state.data} syncId={'unique' + this.initTime}
                margin={{ top: 2, right: 0, left: 0, bottom: 0 }} >
             <XAxis dataKey="shortTime" style={{fontSize:'12px'}} />
             <YAxis yAxisId="left2"  unit="mph" style={{fontSize:'12px'}}/>
             <YAxis yAxisId="right2" orientation="right"  domain={[0,100]} unit="%" style={{fontSize:'12px'}}/>
             <CartesianGrid strokeDasharray="3 3" />
             <Tooltip content={this.windTip} />
             <Area yAxisId="left2" type="monotone" dataKey="wnd_spd_mph" stroke="blue" fill="none" activeDot={{r: 2}} dot={false} padding={{ left: 0, right: 0 }}/>
             <Area yAxisId="right2" type="basis" dataKey="pop" stroke="white" fill="#0f3d99" activeDot={{r: 2}} dot={false} padding={{ left: 0, right: 0 }}/>
            </AreaChart>
          </div>
        ) : <div></div>}

      </div>

    )

  }
}

export default ReactTempChart
