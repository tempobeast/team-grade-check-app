import React from "react";
import './App.css';
import Classes from "./Classes";

function PlayerCard ({ player }) {

    const {firstName, lastName, grade, number, team, classes, position} = player;
    
    return (
        <div className="playerCard">
            <div id="playerTitle">
                <h3  id="playerName">{firstName} {lastName} - #{number}</h3>
                <h4 id="position" >{position}</h4>
            </div>
            <p className="cardHeader" id="cardText">Team: {team} | Grade: {grade}</p>
            <Classes 
            classes={classes} 
            /> 
        </div> 
    )
}

export default PlayerCard