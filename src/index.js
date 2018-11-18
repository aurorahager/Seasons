import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  // Get user's current location on mount
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //success callback
      position => this.setState({ lat: position.coords.latitude }),
      //failure callback
      err => this.setState({ errorMessage: err.message })
    ); //END geolocation
  } //END didMount

  render() {
    //if error render, error message
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    //if lat is given and no error, render SeasonDisplay
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    //if not above (ie no data), render loading spinner
    return <Spinner message="Please accept location request" />;
  } //END render
} //END App component

ReactDOM.render(<App />, document.querySelector('#root'));

/////////////////////////////////////////////////////////////////////////
//                            NOTES
////////////////////////////////////////////////////////////////////////

/* React requires a render method in every class component.
render is ONLY for rendering JXS */

/*
!How to initialize the state in the constructor
 *constructor(props) {
  must call super in constructor or will get an error
   *super(props);
   *this.state = { lat: null, errorMessage: '' };
  *}
*/

/*
API calls and data loading should be in life cycle methods (best practice
not to do in constructor) not in the render method. The DOM will re-render
with each state change therefor we want these things outside the render as
to not preform multiple API calls (for each rendering) or come across errors
! Life cycle methods:
*componentDidMount(){}
- will run code once when component first loads

*componentDidUpdate(){}
- will wait for component to be updated and run code on every update

*componentWillUnmount(){}
- will wait till component is on longer shown then will run code

* Less common methods
- componentDidCatch
- componentWillReceiveProps
- componentWillUpdate
- shouldComponentUpdate
- componentWillMount
- getDerivedSateFromProps
- getSnapshotBeforeUpdate
*/
