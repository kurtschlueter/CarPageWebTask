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
              {this.props.carInfo[1].color}
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Doors
            </div>
            <div className="specific-stat">
              {this.props.carInfo[1].doors}
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Wheals
            </div>
            <div className="specific-stat">
              {this.props.carInfo[1].wheels}
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Condition
            </div>
            <div className="specific-stat">
              {this.props.carInfo[1].condition}
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
              {this.props.carInfo[1].cylinders}
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              City MPG
            </div>
            <div className="specific-stat">
              {this.props.carInfo[1].city_mpg + " MPG"}
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Highway MPG
            </div>
            <div className="specific-stat">
              {this.props.carInfo[1].highway_mpg + " MPG"}
            </div>
          </div>
          <div className="specific-details-row">
            <div className="specific-label">
              Engine
            </div>
            <div className="specific-stat">
              {this.props.carInfo[1].engine}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
