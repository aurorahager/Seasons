import './SeasonDisplay.css';
import React from 'react';

// object containing the text and icon info for both season
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly!',
    iconName: 'snowflake'
  }
}; //END seasonConfig

// function to get the current season base on latitude
const getSeason = (lat, month) => {
  // if between march and september
  if (month > 2 && month < 9) {
    // northern hemisphere summer, southern winter
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // not those months: winter northern hemisphere,summer souther
    return lat > 0 ? 'winter' : 'summer';
  } // END if/else
}; // END getSeason

//  functional component to display text and icons for seasons
const SeasonDisplay = props => {
  // get season with users lat and current month
  const season = getSeason(props.lat, new Date().getMonth());
  // get text and icon for either season
  const { text, iconName } = seasonConfig[season];
  // render JSX
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i
        className={`icon-right
      massive ${iconName} icon`}
      />
    </div>
  ); // END return
}; // END SeasonDisplay component

export default SeasonDisplay;
