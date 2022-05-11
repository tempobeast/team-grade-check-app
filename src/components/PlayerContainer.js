import React, { useState } from "react";
import '../App.css';
import PlayerCard from "./PlayerCard";
import PlayerList from "./PlayerList";
import Filter from "./Filter";

function PlayerContainer({ players, onGradeSubmit, clickedPlayer, onPlayerClick, addGrade, setAddGrade }) {
    
    const [searchChange, setSearchChange] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectPosition, setSelectPosition] = useState("All");
    
    

    //console.log(clickedPlayer[0])


    
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
           onGradeSubmit={onGradeSubmit}
           addGrade={addGrade}
           setAddGrade={setAddGrade}
           /> 
           : null
           }
       </div>
    )
}

export default PlayerContainer