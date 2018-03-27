'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import Footer from './Footer/index';
import Header from './Header/index';

/* The layout only runs on ours server */
var kwtv = require('./Header/package-kwtv.json')
var kotv = require('./Header/package.json')
var props = kwtv.defaultProps;
console.log('Header and Footer running as ' + props.affiliate)

export default class Layout extends Component {
  render() {
    return (
      <div >
        <Header nav={props.nav} affiliate={props.affiliate}/>
        <div id='gnm-main-body'>
          <div className='gnm-home container'>
            <div className='row'>
              <div className='frn-u-grid-gutter-xs col-xs-12'>
                {React.cloneElement(this.props.children, { affiliate: 'kotv' })}
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
