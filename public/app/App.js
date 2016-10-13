import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  render() {
    return (
      <div>
        THIS IS A REACT COMPONENT
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// Its important tonote that this React code will get injected into the dom element where id='app'. But this is not the code that gets run directly. It still has to be transpiled into raw javascript from this JSX.