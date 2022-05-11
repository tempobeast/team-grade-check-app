import React from "react";
import '../App.css';
import Classes from "./Classes";



function PlayerCard ({ player, onGradeSubmit, addGrade, setAddGrade }) {

    console.log(player)
    
    
    const {firstName, lastName, grade, number, team, position } = player;
    
    return (
        <div className="playerCard">
            <div id="playerTitle">
                <h3  id="playerName">{firstName} {lastName} - #{number}</h3>
                <h4 id="position" >{position}</h4>
            </div>
            <p className="cardHeader" id="cardText">Team: {team} | Grade: {grade}</p>
            <Classes 
            onGradeSubmit={onGradeSubmit}
            player={player}
            addGrade={addGrade}
            setAddGrade={setAddGrade}
            /> 
        </div> 
    )
}

export default PlayerCard