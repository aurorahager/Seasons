import React from 'react';

// function to get the current season base on latitude
const getSeason = (lat, month) => {
  // if between march and september
  if (month > 2 && month < 9) {
    // northern hemisphere summer, southern winter
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // not those months: winter northern hemisphere,summer souther
    return lat > 0 ? 'winter' : 'summmer';
  } // END if/else
}; // END getSeason

// component
const SeasonDisplay = props => {
  // get season with users lat and current month
  const season = getSeason(props.lat, new Date().getMonth());
  // assign text and icon depending on season
  const text =
    season === 'winter' ? 'burr, it is chilly' : 'lets hit the beach';
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  // render JSX
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  ); // END return
}; // END SeasonDisplay component

export default SeasonDisplay;
