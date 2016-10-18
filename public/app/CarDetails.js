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
      imageNumber: 1,
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
            <h1> {this.props.carInfo[1].name} </h1>
            <div className='stat-label1'> Year </div>
            <div className='stat-figure1'> {this.props.carInfo[1].year} </div>
            <div className='stat-label1'> Price Range </div>
            <div className='stat-figure1'> {"$" + this.props.carInfo[1].price_min.toLocaleString() + " - $" + this.props.carInfo[1].price_max.toLocaleString()} </div>
            <div className='stat-label1'> Mileage </div>
            <div className='stat-figure1'> {this.props.carInfo[1].mileage.toLocaleString() + " miles"} </div>
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
        <div id="section2">
          <div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 1)}>
              <img className="secondary-display" src={this.props.carInfo[1].image_url1} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 2)}>
              <img className="secondary-display" src={this.props.carInfo[1].image_url2} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 3)}>
              <img className="secondary-display" src={this.props.carInfo[1].image_url3} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 4)}>
              <img className="secondary-display" src={this.props.carInfo[1].image_url4} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 5)}>
              <img className="secondary-display" src={this.props.carInfo[1].image_url5} />
            </div>
            <div className="secondary-display-container" onClick={this.onHandleClick.bind(this, 6)}>
              <img className="secondary-display" src={this.props.carInfo[1].image_url6} />
            </div>
          </div>
          <SpecificDetails carInfo={this.props.carInfo}/>
        </div>
      </div>
    );
  }
}