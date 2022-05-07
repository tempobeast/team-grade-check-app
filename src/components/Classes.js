import React, { useState } from "react";
import '../App.css';


function Classes({ classes, onGradeUpdate, player }) {

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

    function handleGradeSubmit(e) {
        const newGrades = player.classes.map((c, i) => {
            return {...c, grade: gradeFormData[i+1]}
        })
        fetch(`http://localhost:3000/players/${player.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                classes: newGrades,
            })
        })
        .then((res) => res.json())
        .then((data) => {
            onGradeUpdate(data)
            setAddGrade(false)
        })
    }


    function handleGradeChange(e) {
        if (e.target.value < 100 && e.target.value > -1){
            setGradeFormData({
                ...gradeFormData,
                [e.target.name]: e.target.value
            })
        }
    }

    function handleAddGradeClick(e) {
        setAddGrade(true)
    }

    function passFail(grade) {
        if (grade < 60) {
            return "fail"
        } else if (grade > 60 && grade < 70) {
            return "warning"
        } else {
            return "pass"
        }
    }

    const renderClasses = classes.map((c) => {
        const classTitle = c.class.charAt(0).toUpperCase() + c.class.slice(1)

        return (

            <li key={c.period} id={c.period}>
                <p className="classList">Class: {classTitle}  |  Teacher: {c.teacher.charAt(0).toUpperCase() + c.teacher.slice(1)}  </p> 
                <p className="classList"> | </p>
                {addGrade ? 
                <form key={c.class} id="addGradeForm" className="classList" >
                    <label>Add {classTitle} Grade: </label>
                    <input 
                    onChange={handleGradeChange} 
                    type="number" 
                    max="101"
                    min="1"
                    name={c.period}
                    />
                </form>
                : 
                <p className="classList" id={passFail(c.grade)}>{c.grade}%</p>
                }
            </li>
        )}
)

    return (
        <ol className="listOfClasses">
            {renderClasses}
            <button onClick={handleAddGradeClick}>Add Grades</button>
            <button onClick={handleGradeSubmit}>Submit Grades</button>
        </ol>
    )
}

export default Classes