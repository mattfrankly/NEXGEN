import React, {Component} from 'react';

export default class UControl extends Component {
  constructor(props){
    super(props);
    /* WARN is News on 6
      ESP is News 9 */
    this.state ={
      show: false,
      height: false
    }
    this.container = false;

  }

  componentDidMount(){
    /* don't want to inject iframe until we are actually ready */
    if(window){ //only on client
    //  if(document.getElementById('body').offsetWidth > 995)
        var height = false
        if(window.innerWidth < 996){
          // this.height = window.innerHeight - document.getElementById('gnm-header-without-banner').offsetHeight - document.getElementById('gnm-banner').offsetHeight
          // console.log('height', this.height)
      
        }

        this.setState({show: true})


    }

  }

  render(){
    return (
      <div className='gnm-u-control-radar' ref={(container) => { this.container = container; }}>
        { this.state.show
          ? (
            <div>
              <iframe
              src={this.container.offsetWidth > 768
                ? 'http://content.wdtinc.com/imap/imap5/?MAPID=11266&amp;CLIENTID=20212'
                : 'http://content.wdtinc.com/imap/imaplite/?MAPID=15484&CLIENTID=20212'}
                scrolling="no"
                style={{height: this.height ||  null}}
               allowFullScreen="true" ></iframe>
             <div className="close-button">X</div>
            </div>
            )
          : null
        }
      </div>
    )
  }

//http://content.wdtinc.com/imap/imaplite/?MAPID=15484&CLIENTID=20212
}
