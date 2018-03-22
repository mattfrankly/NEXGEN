import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer'
/* This section  needs some SERIOUS work in react, but it runs, and will get back to it later */

class SkyCam extends Component {

  constructor(props){ //gives us acces to props, fires long before page load
    super(props) //assigns props to this.props
    this.affiliate = props.affiliate;
    this.state = {
      skyCams: [],
      index: 0,
      video: false
    } /* great place to assign default state */
    this.skycamFeedURL = `https://kotv.com/api/getLiveCams.aspx?station=${this.affiliate}`;
    this.cacheDuration = 1000*3*60;
    this.hasLocalStorage = this.hasLocalStorage();
    this.scrolling = true;
    this.scrollTimer = null;
    this.scrollDuration = 8*1000;
  }

  hasLocalStorage(){
    let uid = new Date();
      try {
          localStorage.setItem(uid, uid);
          localStorage.removeItem(uid);
          return true;
      } catch (e) {
        return false;
      }
  }

  Ajax(url) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(new Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(new Error('Network error'));
      };
      req.send();
    });
  }

  componentDidMount(){
    this.getCache();
    if(this.scrolling)
      this.scrollTimer = setInterval(()=>{
        let i = 0;
        if(this.state.index < this.state.skyCams.length - 1)
         i = this.state.index + 1;

        this.setState({index: i})
      }, this.scrollDuration)

  }

  getCache(){
    if(this.hasLocalStorage)
      if(localStorage.getItem('skyCamData') && localStorage.getItem('skyCamDataTimestamp'))
        if( Date.now() < parseInt(localStorage.getItem('skyCamDataTimestamp'),10) + this.cacheDuration ){
          let skyCamData = JSON.parse(localStorage.getItem('skyCamData'))
          this.setState({skyCams: skyCamData,
                          index: 0})
          return
        }
    this.getData();
  }
  getData(){
    this.Ajax(this.skycamFeedURL)
    .then((data)=>{
      let skyCamData = JSON.parse(data)
      this.setState({skyCams: skyCamData,
                      index: 0})
      if(this.hasLocalStorage)
        localStorage.setItem('skyCamData', data)
        localStorage.setItem('skyCamDataTimestamp',Date.now())
    })
  }


  increment = () =>{
    let i = 0;
    if(this.state.index < this.state.skyCams.length - 1)
     i = this.state.index + 1;
    clearInterval(this.scrollTimer)
    this.setState({index: i})
  }

  decriment = () =>{
    let i = this.state.index - 1;
    if(this.state.index == 0)
     i = this.state.skyCams.length - 1

    clearInterval(this.scrollTimer)
    this.setState({index: i})
  }

  imgPath = () => {
    if(this.state.skyCams.length < 1)
      return ''
    let after = this.state.skyCams[this.state.index].type == 'webcam' ? '.jpg?' : '00001.jpg?'
    return this.state.skyCams[this.state.index].file_path + after +  Date.now()
  }

  videoSrc=()=>{
    let path = this.state.skyCams[this.state.index].movie_path + "_cam.mp4?" + Date.now()
    return [{src: path, type: 'video/mp4'}]
  }

  toggleVideo =()=>{
    this.scrolling = false;
    this.setState({video: !this.state.video})
  }


  componentWillMount(){
   /* OPTIONAL, fires before initial mount into DOM. Setting state here or editing props here will not cause a re-render*/
  }


/*<img src="http://ftpcontent.worldnow.com/kotv/skycams/bartlesville_00001.jpg?1517603887626" alt="Bartlesville"> */

  render(){
    return (<div className='gnm-skycam'  >
              <div className="toolbar">
                <h3>{ this.props.affiliate == 'kotv'
                  ? 'Osage Casino SKYCAM Network'
                  : 'Air Comfort SKYCAM Network'}</h3>
                <button onClick={this.decriment}>
                  <span className="fa fa-chevron-left"></span>
                </button>
                <button onClick={this.increment}>
                  <span className="fa fa-chevron-right"></span>
                </button>

                <button onClick={this.toggleVideo}>
                  <span className="fa fa-camera" style={!this.state.video ? {color: '#111111'} : {color: '#999999'}}></span>
                </button>
                <button onClick={this.toggleVideo}>
                  <span className="fa fa-video-camera" style={this.state.video ? {color: '#111111'} : {color: '#999999'}}></span>
                </button>
                <h4>{this.state.skyCams.length > 0 ? this.state.skyCams[this.state.index].cam_name : ''}</h4>
              </div>
              <div className="skycam-container" >
                {this.state.video
                  ? <VideoPlayer  sources={this.videoSrc()} />
                  : <img className="img-responsive" src={this.imgPath()} alt="Image Not Available"></img>
                }
              </div>
            </div>)
  }
}

export default SkyCam;
