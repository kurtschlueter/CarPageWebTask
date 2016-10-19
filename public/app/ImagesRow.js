import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ImagesRow extends Component {

  render() {
    return (
      <div id="image-row">
        <div className="secondary-display-container" onClick={this.props.changeProfileImage.bind(this, 1)}>
          <img className="secondary-display" src={this.props.carInfo[1].image_url1} />
        </div>
        <div className="secondary-display-container" onClick={this.props.changeProfileImage.bind(this, 2)}>
          <img className="secondary-display" src={this.props.carInfo[1].image_url2} />
        </div>
        <div className="secondary-display-container" onClick={this.props.changeProfileImage.bind(this, 3)}>
          <img className="secondary-display" src={this.props.carInfo[1].image_url3} />
        </div>
        <div className="secondary-display-container" onClick={this.props.changeProfileImage.bind(this, 4)}>
          <img className="secondary-display" src={this.props.carInfo[1].image_url4} />
        </div>
        <div className="secondary-display-container" onClick={this.props.changeProfileImage.bind(this, 5)}>
          <img className="secondary-display" src={this.props.carInfo[1].image_url5} />
        </div>
        <div className="secondary-display-container" onClick={this.props.changeProfileImage.bind(this, 6)}>
          <img className="secondary-display" src={this.props.carInfo[1].image_url6} />
        </div>
      </div>
    );
  }
}

