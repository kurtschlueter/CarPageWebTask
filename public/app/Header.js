import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
export default class Header extends Component {

  render() {
    return (
      <div id="header">
        <div id="header-right">
          <div className="right-header-icon-container">
            <FontAwesome
              className='header-icon'
              name='map-marker'
              size='custom'
            />
          </div>
          <div className="right-header-icon-container">
            <FontAwesome
              className='header-icon'
              name='phone'
              size='custom'
            />
          </div>
          <div className="right-header-icon-container" id="clock-icon-div">
            <FontAwesome
              className='header-icon'
              name='clock-o'
              size='custom'
            />
          </div>
        </div>
        <div id="header-left">
          <div id="left-header-icon-container">
            <FontAwesome
              className='header-icon'
              name='search'
              size='custom'
            />
          </div>
        </div>
      </div>
    );
  }
}