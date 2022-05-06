import React, {useState} from "react";
import '../App.css';
import Classes from "./Classes";



function PlayerCard ({ player, onGradeUpdate }) {
    

    const {firstName, lastName, grade, number, team, classes, position, id} = player;
    
    return (
        <div className="playerCard">
            <div id="playerTitle">
                <h3  id="playerName">{firstName} {lastName} - #{number}</h3>
                <h4 id="position" >{position}</h4>
            </div>
            <p className="cardHeader" id="cardText">Team: {team} | Grade: {grade}</p>
            <Classes 
            classes={classes} 
            onGradeUpdate={onGradeUpdate}
            player={player}
           // onNewGradeSubmit={onNewGradeSubmit}
            /> 
        </div> 
    )
}

export default PlayerCard