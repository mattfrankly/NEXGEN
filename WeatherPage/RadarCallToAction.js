import React, {Component} from 'react';


class RadarCallToAction extends Component {
  destination(){
    switch (this.props.title) {
      case "WARN": return "/WARN";
      case "ESP" : return "/ESP";
      default: return "/U-Control"
    }
  }
  
  url(){
    var url = this.props.title == "U-Control"
                  ? "http://ftpcontent.worldnow.com/kwtv/weather/streetlevelFull.gif"
                  : "http://aws.kotv.com/MorHtml5/kotv/comp/960x540/statewide_anim.gif"
    return  `url(${url})`
  }
  render() {
    return (<div className='gnm-radar-call-to-action' >
              <a className="dark" href={this.destination()}>
                <div className="img-container" style={{backgroundImage:this.url()}}></div>
                <h6 >
                  <b>{this.props.title} </b>
                  <span>Radar</span>
                </h6>
              </a>
            </div>
          )
  }
}

export default RadarCallToAction;
