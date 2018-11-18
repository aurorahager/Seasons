import React from 'react';

// Functional component for a loading spinner
const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
}; //END Spinner component

// Set a default message for the spinner
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
