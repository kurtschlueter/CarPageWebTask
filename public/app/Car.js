import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Car extends Component {

  render() {
    return (
      <div className='col2'>
        <img id="primary-display" src={"../images/car1.png"} />
        <div id="primary-details">
          <div id="primary-details-content">
            <h4> Ford Spectacular </h4>
          </div>
        </div>
      </div>
    );
  }
}