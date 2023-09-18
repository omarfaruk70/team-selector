import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';

const Players = ({handleTeamSelect}) => {
  // all state are here
    const [players, setPlayers] = useState([]);
    
    // all side effect
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPlayers(data.players))

    },[])
    return (
        <div className="w-2/3">
            <h3 className="text-xl font-bold text-center mb-4">Total players: {players.length}</h3>
        <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {
            players.map((player, idx) => <Player key={idx} player={player} handleTeamSelect={handleTeamSelect}></Player>)
          } 
          </div>
        </div>
    );
};

Players.propTypes = {
  handleTeamSelect: PropTypes.func
}
export default Players;