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
    const [gradeFormData, setGradeFormData] = useState({
        1: "N/A",
        2: "N/A",
        3: "N/A",
        4: "N/A",
        5: "N/A",
        6: "N/A",
        7: "N/A",
    });

    function onPlayerClick (selectedId) {
        const selectedPlayer = players.filter((player) => player.id.toString() === selectedId.toString())
        setClickedPlayer(selectedPlayer);
        setGradeFormData({
            1 : selectedPlayer[0].classes[0].grade,
            2 : selectedPlayer[0].classes[1].grade,
            3 : selectedPlayer[0].classes[2].grade,
            4 : selectedPlayer[0].classes[3].grade,
            5 : selectedPlayer[0].classes[4].grade,
            6 : selectedPlayer[0].classes[5].grade,
            7 : selectedPlayer[0].classes[6].grade,
        })
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
           setGradeFormData={setGradeFormData}
            gradeFormData={gradeFormData}
           /> 
           : null
           }
       </div>
    )
}

export default PlayerContainer