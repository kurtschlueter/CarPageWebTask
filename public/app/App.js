import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import CarDetails from './CarDetails';
import Firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyClVpRY-c0pezTV-vyC6cnlG6f6bXU8lpM",
  authDomain: "carpagewebtask.firebaseapp.com",
  databaseURL: "https://carpagewebtask.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "131105351129"
};

Firebase.initializeApp(config);
Firebase.auth().signInWithEmailAndPassword("user@user.com", "password")

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
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// Its important to note that this React code will get injected into the dom element where id='app'. But this is not the code that gets run directly. It still has to be transpiled into raw javascript from this JSX.