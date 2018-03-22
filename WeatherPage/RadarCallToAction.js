import React, {Component} from 'react';


class RadarCallToAction extends Component {
  destination(){
    switch (this.props.title) {
      case "WARN": return "/WARN";
      case "ESP" : return "/ESP";
      default: return "/U-Control"
    }
  }
  render() {
    return (<div className='gnm-radar-call-to-action' >
              <a  href={this.destination()}>
                <h4 >
                  <b>{this.props.title} </b>
                  <span>Interactive Radar</span>
                </h4>
                <div>
                  <img src={ this.props.title == "U-Control"
                                ? "http://ftpcontent.worldnow.com/kwtv/weather/streetlevelFull.gif"
                                : "http://aws.kotv.com/MorHtml5/kotv/comp/960x540/statewide_anim.gif"} />
                </div>

              </a>
            </div>
          )
  }
}

export default RadarCallToAction;
