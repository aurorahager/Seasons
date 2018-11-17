import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  /*we want to initialize the state and do API calls in the constructor
  not the render method. the DOM will re-render with each state change
  therefor we want these things outside the render as to not preform multiple
  API calls (for each rendering) or come across errors*/
  constructor(props) {
    //must call super in constructor or will get an error
    super(props);

    // THIS IS THE ONLY TIME we do a direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' };

    // get user's current location
    window.navigator.geolocation.getCurrentPosition(
      //success callback, set lat in state to user's location
      position => {
        console.log(position.coords.latitude);
        // set state (do not reassign this.state)
        this.setState({ lat: position.coords.latitude });
      },
      //failure callback
      err => {
        this.setState({ errorMessage: err.message });
      }
    ); //END geolocation
  } //END constructor

  // React requires a render method in every class component
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  } //END render
} //END App component

ReactDOM.render(<App />, document.querySelector('#root'));
