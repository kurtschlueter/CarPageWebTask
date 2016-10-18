import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import Dotenv from 'dotenv';

import Header from './Header';
import CarDetails from './CarDetails';
import Firebase from 'firebase';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carInfo: {}
    };
  }

  componentWillMount() {
    var db = Firebase.database();
    var ref = db.ref("/cars");

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function(snapshot) {
      this.setState({ carInfo: snapshot.val()});
    }.bind(this));
  }

  holdInititalState() {
    if (Object.keys(this.state.carInfo).length === 0) {
      return(null)
    } else {
      return(<CarDetails carInfo={this.state.carInfo}/>)
    }
  }

  render() {
    console.log(this.state.carInfo)
    return (
      <div>
        <Header />
        {this.holdInititalState()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// Its important tonote that this React code will get injected into the dom element where id='app'. But this is not the code that gets run directly. It still has to be transpiled into raw javascript from this JSX.