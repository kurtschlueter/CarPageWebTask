import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ImagesRow extends Component {

  render() {
    return (
      <div>
        <div className="secondary-display-container" onClick={this.props.onClick(1)}>
          <img className="secondary-display" src={"../images/car1.png"} />
        </div>
        <div className="secondary-display-container" onClick={this.props.onClick(1)}>
          <img className="secondary-display" src={"../images/car2.png"} />
        </div>
        <div className="secondary-display-container" onClick={this.props.onClick(1)}>
          <img className="secondary-display" src={"../images/car3.png"} />
        </div>
        <div className="secondary-display-container" onClick={this.props.onClick(1)}>
          <img className="secondary-display" src={"../images/car4.png"} />
        </div>
        <div className="secondary-display-container" onClick={this.props.onClick(1)}>
          <img className="secondary-display" src={"../images/car5.png"} />
        </div>
        <div className="secondary-display-container" onClick={this.props.onClick(1)}>
          <img className="secondary-display" src={"../images/car6.png"} />
        </div>
      </div>
    );
  }
}

