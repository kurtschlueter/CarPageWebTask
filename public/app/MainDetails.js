import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

export default class MainDetails extends Component {

  render() {
    return (
      <div>
        <img id="primary-display" src={"../images/car1.png"} />
        <div id="primary-details">
          <div id="primary-details-content">
            <h1> Ford Spectacular </h1>
            <div className='stat-label1'> Year </div>
            <div className='stat-figure1'> 3012 </div>
            <div className='stat-label1'> Price Range </div>
            <div className='stat-figure1'> $100,000 - $120,000 </div>
            <div className='stat-label1'> Mileage </div>
            <div className='stat-figure1'> 600,000 miles </div>
            <div className='stat-label1'> Item Number : AV8AS7 </div>
            <div className='stat-label1'> VIN : EV11JV10AV8AS7MI4 </div>
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
                <div className='stat-figure2'>123</div>
              </div>
              <div className="page-stat">
                <div className='stat-label1'>Saves</div>
                <div className='stat-figure2'>45</div>
              </div>
              <div className="page-stat">
                <div className='stat-label1'>Shares</div>
                <div className='stat-figure2'>49</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
