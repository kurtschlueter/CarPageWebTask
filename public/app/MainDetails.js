import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

export default class MainDetails extends Component {

  render() {
    return (
      <div id="primary-details">
        <h1> {this.props.carInfo[1].name} </h1>
        <div id="primary-details-content-1">

          <div className='stat-label1'> Year </div>
          <div className='stat-figure1'> {this.props.carInfo[1].year} </div>
          <div className='stat-label1'> Price Range </div>
          <div className='stat-figure1'> {"$" + this.props.carInfo[1].price_min.toLocaleString() + " - $" + this.props.carInfo[1].price_max.toLocaleString()} </div>
          <div className='stat-label1'> Mileage </div>
          <div className='stat-figure1'> {this.props.carInfo[1].mileage.toLocaleString() + " miles"} </div>
        </div>
        <div id="primary-details-content-2">
          <div className='stat-label1'> {"Item Number : " + this.props.carInfo[1].item_number} </div>
          <div className='stat-label1'> {"VIN : " + this.props.carInfo[1].vin_number} </div>
          <div id="share-container">
            <div className='share-label1'> Share this car </div>
            <FontAwesome
              className='mail-icon'
              name='envelope'
              size='custom'
            />
          </div>
          <div id="page-stats-container">
            <div className="page-stat">
              <div className='stat-label1'>Views</div>
              <div className='stat-figure2'>{this.props.carInfo[1].page_views}</div>
            </div>
            <div className="page-stat">
              <div className='stat-label1'>Saves</div>
              <div className='stat-figure2'>{this.props.carInfo[1].saves}</div>
            </div>
            <div className="page-stat">
              <div className='stat-label1'>Shares</div>
              <div className='stat-figure2'>{this.props.carInfo[1].shares}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
