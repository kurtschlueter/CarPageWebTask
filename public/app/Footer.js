import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {

  render() {
    return (
      <div id="footer">
        <div className="footer-link-container">
          <div className="footer-link">
            About Us
          </div>
        </div>
        <div className="footer-link-container">
          <div className="footer-link">
            Terms
          </div>
        </div>
        <div className="footer-link-container">
          <div className="footer-link">
            Privacy Policy
          </div>
        </div>
        <p>
          PLS is a registered service mark and other marks are service marks of PLS Financial Services, INC.  © 2016
        </p>
      </div>
    );
  }
}