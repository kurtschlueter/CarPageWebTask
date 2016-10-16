import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SpecificDetails extends Component {

  render() {
    return (
      <div id="specific-details-container">
        <div id="exterior-details">
          <div className="specific-details-title">
            EXTERIOR
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Color
            </div>
            <div className="specific-stat">
              Rusty Charcoal
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Seats
            </div>
            <div className="specific-stat">
              Premium Leather
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Wheals
            </div>
            <div className="specific-stat">
              Pirelli
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Title
            </div>
            <div className="specific-stat">
              Clean
            </div>
          </div>
        </div>
        <div id="performance-details">
          <div className="specific-details-title">
            PERFORMANCE
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Cylinders
            </div>
            <div className="specific-stat">
              V12
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              City MPG
            </div>
            <div className="specific-stat">
              100 MPG
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Highway MPG
            </div>
            <div className="specific-stat">
              200 MPG
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Engine
            </div>
            <div className="specific-stat">
              2.6
            </div>
          </div>
        </div>
      </div>
    );
  }
}
