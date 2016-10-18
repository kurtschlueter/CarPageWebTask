import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'nuka-carousel';

export default class ImageScrollMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  render() {

    return (
      <div>
        <Carousel
          ref="carousel"
          slideIndex={this.state.slideIndex}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          <img src={"../images/car1.png"} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
          <img src={"../images/car2.png"} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
          <img src={"../images/car3.png"} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
          <img src={"../images/car4.png"} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
          <img src={"../images/car5.png"} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
          <img src={"../images/car6.png"} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        </Carousel>
      </div>
    );
  }
}

