import React, { useState } from "react";
import '../App.css';
import PlayerCard from "./PlayerCard";
import PlayerList from "./PlayerList";
import Filter from "./Filter";

function PlayerContainer({ players, onGradeUpdate, setClickedPlayer, clickedPlayer }) {
    
    const [searchChange, setSearchChange] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectPosition, setSelectPosition] = useState("All");
    const [addGrade, setAddGrade] = useState(false);
    
    function onPlayerClick (selectedId) {
        const selectedPlayer = players.filter((player) => player.id.toString() === selectedId.toString())
        setClickedPlayer(selectedPlayer);
    }
    
    function onSearchChange (query) {
        setSearchChange(query)
      }
    
    function onSelectChange (category) {
        setSelectedCategory(category)
      }

    function onPositionChange (position) {
        setSelectPosition(position)
    }

    return (
       <div>
           <Filter 
           onSearchChange={onSearchChange} 
           onSelectChange={onSelectChange}
           onPositionChange={onPositionChange}
            />
           <PlayerList 
           players={players} 
           onPlayerClick={onPlayerClick} 
           search={searchChange} 
           teamSelect={selectedCategory}
           selectPosition={selectPosition}
           setAddGrade={setAddGrade}
           />
           {clickedPlayer ? 
           <PlayerCard 
           player={clickedPlayer[0]} 
           onGradeUpdate={onGradeUpdate}
           addGrade={addGrade}
           setAddGrade={setAddGrade}
           /> 
           : null
           }
       </div>
    )
}

export default PlayerContainer