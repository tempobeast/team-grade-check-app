import React, { useState } from "react";
import './App.css';
import Classes from "./Classes";

function PlayerCard ({ player }) {

    const {firstName, lastName, grade, number, team, classes} = player;
    
//    const [addGrade, setAddGrade] = useState(false)
    // const [newGrades, setNewGrades] = useState({
    //     1: "",
    //     2: "",
    //     3: "",
    //     4: "",
    //     5: "",
    //     6: "",
    //     7: ""
    // })
    
    //console.log(newGrades)
    // function handleClick(e) {
    //     setAddGrade(!addGrade)
    // }

    // function onGradeChange(e) {
    //     setNewGrades({...newGrades,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // function handleSubmitGradesClick (e) {
    //     onSubmitGrades(newGrades, player)
    // }
    
    return (
        <div className="playerCard">
            <h3 className="cardHeader" id="cardHeader">{firstName} {lastName} - #{number}</h3>
            <p className="cardHeader" id="cardText">Team: {team} | Grade: {grade}</p>
            <Classes 
            classes={classes} 
            // addGrade={addGrade} 
            // onGradeChange={onGradeChange}
            /> 
            {/* {!addGrade ? 
            <button onClick={handleClick} className="button" id="addGrades">Add Weekly Grades</button>
            :
            <button 
            onClick={handleSubmitGradesClick}
            className="button" 
            id="submitGrades"
            >Submit Grades
            </button>
            } */}
        </div> 
    )
}

export default PlayerCard