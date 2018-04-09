import React, {Component} from 'react';


class WarnEspRadar extends Component {
  constructor(props){
    super(props);
    /* WARN is News on 6
      ESP is News 9 */
    this.path = props.affiliate == 'kotv'
      ?  'http://aws.kotv.com/MorHtml5/index_tulsa.html'
      :  'http://aws.kotv.com/MorHtml5/index_okc.html'

    this.state ={
      mounted: false
    }
  }

  componentDidMount(){
    /* don't want to inject iframe until we are actually ready */
    this.setState({mounted: true})
  }

  render(){
    if(this.state.mounted && typeof window === 'object')
      return (
        <div className='gnm-warn-esp-radar'>
          <iframe id="betaRadarFrame"
            src={this.path}
            border="0" width="964" height="644" scrolling="no"
            style={{border:'0px'}}></iframe>

        </div>
      )

    return null
    }

}

export default WarnEspRadar;
