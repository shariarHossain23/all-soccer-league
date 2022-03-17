import React from 'react';
import './showleague.css';

const Showleague = (props) => {
    console.log(props.league)
    const {strLeague,strLeagueAlternate,strSport} = props.league
    return (
        <div className='league'>
          <h2>{strLeague}</h2>
          <h4>{strLeagueAlternate}</h4>
          <h6>{strSport}</h6>
        </div>
    );
};

export default Showleague;