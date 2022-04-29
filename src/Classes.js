import React from "react";
import './App.css';

function Classes({ classes, addGrade, onGradeChange }) {

    function handleGradeChange(e) {
        onGradeChange(e)
    }

    const renderClasses = classes.map((c) => {
        return (
            <li key={c.period}>
                <p>Class: {c.class.charAt(0).toUpperCase() + c.class.slice(1)}  |  Teacher: {c.teacher.charAt(0).toUpperCase() + c.teacher.slice(1)}  </p> 
                {addGrade ? 
                <form key={c.class}>
                    <label>Add {c.class} Grade: </label>
                    <input onChange={handleGradeChange} type="text" name={c.period}></input>
                </form>
                : null
                }
            </li>
        )
})

    return (
        <ol className="listOfClasses">
            {renderClasses}
        </ol>
    )
}

export default Classes