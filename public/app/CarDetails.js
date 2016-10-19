import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MainDetails from './MainDetails';
import ImagesRow from './ImagesRow';
import ImageScrollMobile from './ImageScrollMobile';
import FontAwesome from 'react-fontawesome';
import SpecificDetails from './SpecificDetails';

export default class CarDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageNumber: 1,
    };
  }

  changeProfileImage(num) {
    this.setState({imageNumber: num})
  }

  render() {
    return (
      <div>
        <img id="primary-display" src={"../images/car" + this.state.imageNumber + ".png"} />
        <ImageScrollMobile carInfo={this.props.carInfo}/>
        <MainDetails
          imageNumber={ this.state.imageNumber }
          carInfo={ this.props.carInfo}
        />
        <div id="section2">
          <div id="mobile-call-div">CALL US</div>
          <ImagesRow
            carInfo={ this.props.carInfo}
            changeProfileImage={ this.changeProfileImage.bind(this) }
          />
          <SpecificDetails
            carInfo={this.props.carInfo}
          />
        </div>
      </div>
    );
  }
}