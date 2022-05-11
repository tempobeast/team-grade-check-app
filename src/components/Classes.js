import React, { useState } from "react";
import '../App.css';


function Classes({ onGradeSubmit, player, addGrade, setAddGrade }) {

    const { classes } = player

    const [error, setError] = useState(null);
    const [gradeFormData, setGradeFormData] = useState({
        1 : classes[0].grade,
        2 : classes[1].grade,
        3 : classes[2].grade,
        4 : classes[3].grade,
        5 : classes[4].grade,
        6 : classes[5].grade,
        7 : classes[6].grade,
    });

    function handleGradeSubmit(e) {
        onGradeSubmit(gradeFormData, player)
    }
        


    function handleGradeChange(e) {
        const newGrade = e.target.value;
        if (e.target.value < 101 && e.target.value > -1){
            setGradeFormData({
                ...gradeFormData,
                [e.target.name]: newGrade
            })
            setError(null)
        } else {
            setError(`${newGrade} is not a valid number!`);
        }
    }

    function handleAddGradeClick(e) {
        setAddGrade(true)
    }

    function passFail(grade) {
        if (grade < 60) {
            return "fail"
        } else if (grade >= 60 && grade < 70) {
            return "warning"
        } else {
            return "pass"
        }
    }

    const renderClasses = classes.map((c) => {
        const classTitle = c.class.charAt(0).toUpperCase() + c.class.slice(1)

        if (addGrade) {
            
            return (
                <tr key={c.period}>
                    <td>{classTitle}</td>
                    <td>{c.teacher.charAt(0).toUpperCase() + c.teacher.slice(1)}</td>
                    <td>
                        <form id="addGradeForm" className="classList" >
                            <label>Add {classTitle} Grade:</label>
                            <input 
                            value={gradeFormData[c.period]}
                            onChange={handleGradeChange}
                            type="number"
                            max="101"
                            min="1"
                            name={c.period}
                            />
                        </form>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr key={c.period}>
                    <td>{classTitle}</td>
                    <td>{c.teacher.charAt(0).toUpperCase() + c.teacher.slice(1)}</td>
                    <td className="classList" id={passFail(c.grade)}>{c.grade}%</td>
                </tr>
            )
        }
    })

    return (
        <div className="listOfClasses">
            <table>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Teacher</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {renderClasses}
                </tbody>
            </table>
            {error ? <span style={{ color: "red" }}>{error}</span> : null}<br/>
            <button className="classButtons" onClick={handleAddGradeClick}>Add Grades</button>
            <button className="classButtons" onClick={handleGradeSubmit}>Submit Grades</button>
        </div>
    )
}

export default Classes