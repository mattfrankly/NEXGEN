import React, {Component} from 'react'
import UControl from '../UControl'

const UControlConfig = require('../Ucontrol/package.json')

export default class UControlPage extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className ='gnm-u-control-page'>
        <UControl {...UControl.defaultProps} />
      </div>
    )
  }
}
