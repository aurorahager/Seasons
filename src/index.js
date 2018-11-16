import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // init state
    this.state = { lat: null };

    // get user's current location
    window.navigator.geolocation.getCurrentPosition(
      //success callback, set lat in state to user's location
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      //failure callback
      err => console.log(err)
    ); //END geolocation
  } //END constructor

  render() {
    return <div>{this.state.lat}</div>;
  } //END render
} //END App component

ReactDOM.render(<App />, document.querySelector('#root'));
