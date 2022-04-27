import React, { useState } from "react";
import './App.css';
import PlayerCard from "./PlayerCard";
import PlayerList from "./PlayerList";
import Filter from "./Filter";

function PlayerContainer({ players }) {

    const [clickedPlayer, setClickedPlayer] = useState("");
    const [searchChange, setSearchChange] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    
    function onPlayerClick (selectedId) {
        const selectedPlayer = players.filter((player) => player.id.toString() === selectedId.toString())
        setClickedPlayer(selectedPlayer)
    }
    
    function onSearchChange (query) {
        setSearchChange(query)
      }
    
    function onSelectchange (category) {
        setSelectedCategory(category)
      }
    
    return (
       <div>
           <Filter 
           onSearchChange={onSearchChange} 
           onSelectchange={onSelectchange}
            />
           <PlayerList 
           players={players} 
           onPlayerClick={onPlayerClick} 
           search={searchChange} 
           teamSelect={selectedCategory}
           />
           {clickedPlayer ? 
           <PlayerCard 
           player={clickedPlayer[0]} 
           /> 
           : null
           }
       </div>
    )
}

export default PlayerContainer