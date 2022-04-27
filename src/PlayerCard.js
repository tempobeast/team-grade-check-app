import React, { useState } from "react";
import './App.css';
import Classes from "./Classes";

function PlayerCard ({ player }) {

    const {firstName, lastName, grade, number, team, classes} = player;
    
    return (
        <div className="playerCard">
            <h3 className="cardHeader" id="cardHeader">{firstName} {lastName} - #{number}</h3>
            <p className="cardHeader" id="cardText">Team: {team} | Grade: {grade}</p>
            <Classes 
            classes={classes} 
            /> 
        </div> 
    )
}

export default PlayerCard