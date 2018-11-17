import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //initialize the state in the constructor
  constructor(props) {
    // must call super in constructor or will get an error
    super(props);
    // THIS IS THE ONLY TIME we do a direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };
  } //END constructor

  // One line way to init state without constructor
  // !state = { lat: null, errorMessage: '' }

  /* API calls and data loading should be in life cycle methods (best practice
  not to do in constructor) not in the render method. The DOM will re-render
  with each state change therefor we want these things outside the render as
  to not preform multiple API calls (for each rendering) or come across errors*/

  componentDidMount() {
    // get user's current location
    window.navigator.geolocation.getCurrentPosition(
      //success callback, set lat in state to user's location
      // set state (do not reassign this.state)
      position => this.setState({ lat: position.coords.latitude }),
      //failure callback
      err => this.setState({ errorMessage: err.message })
    ); //END geolocation
  } //END didMount

  /* React requires a render method in every class component.
   render is ONLY for rendering JXS */
  render() {
    //if error render error message
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    //if lat is given and no error render lat
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    //if not above (ie no data) render loading
    return <div>Loading...</div>;
  } //END render
} //END App component

ReactDOM.render(<App />, document.querySelector('#root'));

/*
! Life cycle methods:
*componentDidMount(){}
- will run code once when component first loads

*componentDidUpdate(){}
- will wait for component to be updated and run code on every update

*componentWillUnmount(){}
- will wait till component is on longer shown then will run code

componentDidCatch
componentWillReceiveProps
componentWillUpdate
shouldComponentUpdate
componentWillMount
getDerivedSateFromProps
getSnapshotBeforeUpdate
*/
