import React, { useState } from "react";
import './App.css';
import PlayerCard from "./PlayerCard";
import PlayerList from "./PlayerList";
import Filter from "./Filter";

function PlayerContainer({ players, search, teamSelect, addPlayerClick }) {

    const [clickedPlayer, setClickedPlayer] = useState("");
    
    function onPlayerClick (selectedId) {
        console.log(selectedId.toString())
        const selectedPlayer = players.filter((player) => player.id.toString() === selectedId.toString())
        setClickedPlayer(selectedPlayer)
    }
    
    return (
       <div>
           <Filter />
           <PlayerList 
           players={players} 
           onPlayerClick={onPlayerClick} 
           search={search} 
           teamSelect={teamSelect}
           addPlayerClick={addPlayerClick}
           />
           {clickedPlayer ? 
           <PlayerCard 
           player={clickedPlayer[0]} 
           //onSubmitGrades={onSubmitGrades}
           /> 
           : null
           }
       </div>
    )
}

export default PlayerContainer