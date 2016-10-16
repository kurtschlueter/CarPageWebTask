import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import MainDetails from './MainDetails';
// import ImagesRow from './ImagesRow';
import FontAwesome from 'react-fontawesome';
import SpecificDetails from './SpecificDetails';

export default class CarDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageNumber: 1
    };
  }

  onHandleClick(num) {
    this.setState({imageNumber: num})
  }

  render() {
    return (
      <div>
        <img id="primary-display" src={"../images/car" + this.state.imageNumber + ".png"} />
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
        <div id="section2">
          <div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 1)}>
              <img className="secondary-display" src={"../images/car1.png"} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 2)}>
              <img className="secondary-display" src={"../images/car2.png"} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 3)}>
              <img className="secondary-display" src={"../images/car3.png"} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 4)}>
              <img className="secondary-display" src={"../images/car4.png"} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 5)}>
              <img className="secondary-display" src={"../images/car5.png"} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 6)}>
              <img className="secondary-display" src={"../images/car6.png"} />
            </div>
          </div>
          <SpecificDetails />
        </div>
      </div>
    );
  }
}