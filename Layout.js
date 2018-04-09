'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import Footer from './Footer/index';
import Header from './Header/index';
import ZipController from './ZipController'

/* The layout only runs on ours server */
var HeaderConfig = require('./Header/package-kwtv.json')
var HeaderConfig= require('./Header/package.json')
console.log('Header Running As: ',HeaderConfig.defaultProps.affiliate)
const FooterConfig = require('./Footer/package.json')
console.log('Footer Running As: ',FooterConfig.defaultProps.affiliate)
ZipController.setAffiliate('kotv')


export default class Layout extends Component {
  render() {
    return (
      <div >
        <Header {...HeaderConfig.defaultProps}/>
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
            <Footer {...FooterConfig.defaultProps}/>
          </div>
        </div>

      </div>
    );
  }
}
