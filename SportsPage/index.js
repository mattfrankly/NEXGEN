import React, { Component} from 'react';

export default class SportsPage extends Component{
  constructor(props){
    super(props)
    this.affiliate = this.props.affiliate
  }

  render() {
    return (
      <div >
        <img src="img/sportsing.jpeg" />
      </div>
    );
  }

}
