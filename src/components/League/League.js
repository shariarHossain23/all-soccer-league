import React, { useEffect, useState } from 'react';
import Showleague from '../Showleague/Showleague';
import './League.css';

const League = () => {
    const [leagues,setLeagues] = useState([]);
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php")
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])
    return (
        <div >
            <h1>ALl league</h1>
           <div className='leagues'> {
                leagues.map(league => <Showleague league ={league} key={league.idLeague}></Showleague>)
            }
            </div>
        </div>
    );
};

export default League;