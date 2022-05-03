import React, { useState } from "react";
import '../App.css';


function Classes({ classes, onGradeSubmit, submitGrades }) {

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

    function handleGradeChange(e) {
        setGradeFormData({
            ...gradeFormData,
            [e.target.name]: e.target.value
        })
    }

    function handleAddGradeClick(e) {
        setAddGrade(true)
    }

    function handleGradeSubmit(e) {
        onGradeSubmit(gradeFormData)
        setAddGrade(false)
    }

    const renderClasses = classes.map((c) => {
        const classTitle = c.class.charAt(0).toUpperCase() + c.class.slice(1)

        return (
            <li key={c.period} id={c.period}>
                <p className="classList">Class: {classTitle}  |  Teacher: {c.teacher.charAt(0).toUpperCase() + c.teacher.slice(1)}  </p> 
                <p className="classList"> | </p>
                {addGrade ? 
                <form key={c.class} id="addGradeForm" className="classList">
                    <label>Add {classTitle} Grade: </label>
                    <input onChange={handleGradeChange} type="text" name={c.period}></input>
                </form>
                : 
                <p className="classList">{Object.values(submitGrades)[c.period - 1]}</p>
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