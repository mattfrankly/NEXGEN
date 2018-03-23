'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import Footer from './Footer/index';
import Header from './Header/index';
var kwtv = require('./Header/package-kwtv.json')
var kotv = require('./Header/package.json')

var props = kotv.defaultProps;

console.log('Running locally as ' + props.affiliate)

export default class Layout extends Component {
  render() {
    return (
      <div >
        <Header affiliate={props.affiliate} nav={props.nav}/>
        <div id='gnm-main-body'>
          <div className='gnm-home container'>
            <div className='row'>
              <div className='frn-u-grid-gutter-xs col-xs-12'>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
        <div className='frankly-core-ComponentContainer'>
          <div className='frn-u-grid-gutter-lg col-xl-12 '>
            <Footer affiliate={props.affiliate}/>
          </div>
        </div>

      </div>
    );
  }
}
