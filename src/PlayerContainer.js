import React, { useState } from "react";
import './App.css';
import NewPlayerForm from "./NewPlayerForm";
import PlayerCard from "./PlayerCard";
import PlayerList from "./PlayerList";

function PlayerContainer({ players, search, teamSelect, addPlayerClick }) {

    const [clickedPlayer, setClickedPlayer] = useState("");
    
    function onPlayerClick (selectedId) {
        console.log(selectedId.toString())
        const selectedPlayer = players.filter((player) => player.id.toString() === selectedId.toString())
        setClickedPlayer(selectedPlayer)
    }
    
    return (
       <div>
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