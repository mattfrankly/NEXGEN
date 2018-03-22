import React from 'react';

export default class VideoPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      autoplay: this.props.autoplay || false,
      controls: true,
      sources:this.props.sources || [{src: false, type: false}],
      aspectRatio: '16:9',
      fluid: true,
      hls: {
        withCredentials: true
      },
      controlBar: {
        volumePanel: {
          inline: false
        }
      },
      html5: {
        nativeVideoTracks: false
      },
      poster: '',
      preload: 'metadata',
      show: false
    }
    this.player = false;
    this.closeCallback = this.props.closeCallback
    this.uid = 234;
    this.modal = this.props.modal
    this.container = null;
    /* example sources
    http://ftpcontent.worldnow.com/kotv/skycams/renders/bartlesville_cam.mp4
    */
  }

  componentWillReceiveProps(nextProps){
    if(this.state.sources != nextProps.sources)
    this.setState({sources: nextProps.sources}, ()=>{
       this.startPlayer();
    })
  }

  componentDidMount(){
    this.startPlayer();

  }

  startPlayer(){
    if(this.state.sources.length > 0 ){
      if(this.player){
        this.player.dispose()
      }
      /* This is crazy, but the destroy method pulls the container too, so we have to create a new one */
      var video = document.createElement('video');
      this.uid = Date.now();
      video.id = `video-uid-${this.uid}`;
      video.className='video-js vjs-default-skin';
      this.container.prepend(video);
      this.player = window.videojs(video, this.state)
      this.setState({show: true},()=>{
        //this.player.play();
        window.player = this.player
      })

    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
     this.player.dispose();
     this.player = false;
    }
  }

  destroy = () => {
    this.setState({show: false,
                    sources: [{src: false, type: false}]})
    if (this.player) {
     this.player.dispose();
     this.player = false;
    }
    this.closeCallback();

  }



  render() {
    return (
      <div className={'gnm-video-player ' + (this.modal ? 'popup' : '')}  style={{display: this.state.show ? 'block' : 'none'}} ref={(container) => { this.container = container; }}>
        <button className="close-button" onClick={this.destroy} >
          <span className="glyphicon glyphicon-remove"> </span>
        </button>
      </div>
    )
  }
}
