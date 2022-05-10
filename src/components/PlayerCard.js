import React from "react";
import '../App.css';
import Classes from "./Classes";



function PlayerCard ({ player, onGradeUpdate, addGrade, setAddGrade, gradeFormData, setGradeFormData }) {

    console.log(gradeFormData)
    
    
    const {firstName, lastName, grade, number, team, position } = player;
    
    return (
        <div className="playerCard">
            <div id="playerTitle">
                <h3  id="playerName">{firstName} {lastName} - #{number}</h3>
                <h4 id="position" >{position}</h4>
            </div>
            <p className="cardHeader" id="cardText">Team: {team} | Grade: {grade}</p>
            <Classes 
            onGradeUpdate={onGradeUpdate}
            player={player}
            addGrade={addGrade}
            setAddGrade={setAddGrade}
            setGradeFormData={setGradeFormData}
            gradeFormData={gradeFormData}
            /> 
        </div> 
    )
}

export default PlayerCard