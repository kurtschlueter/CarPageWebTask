import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'nuka-carousel';

export default class ImageScrollMobile extends Component {

  render() {
    return (
      <div>
        <Carousel>
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

