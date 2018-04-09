import React, {Component} from 'react'
import WarnEspRadar from '../WarnEspRadar'

const WarnEspRadarConfig = require('../WarnEspRadar/package.json')

export default class RadarPage extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className ='gnm-radar-page'>
        <WarnEspRadar {...WarnEspRadarConfig.defaultProps} />
      </div>
    )
  }
}
