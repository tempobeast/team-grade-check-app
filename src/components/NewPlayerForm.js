import React, { useState } from "react";
import '../App.css';

function NewPlayerForm ({ onFormSumbit }) {

    const [formData, setFormData] = useState ({
        firstName: "",
        lastName: "",
        grade: "9",
        team: "Varsity",
        number: "",
        position: "",
        periodOneClass: "",
        periodOneTeacher: "",
        periodTwoClass: "",
        periodTwoTeacher: "",
        periodThreeClass: "",
        periodThreeTeacher: "",
        periodFourClass: "",
        periodFourTeacher: "",
        periodFiveClass: "",
        periodFiveTeacher: "", 
        periodSixClass: "",
        periodSixTeacher: "",
        periodSevenClass: "",
        periodSevenTeacher: ""
        })
   
    function handleFormChange(e) {
        setFormData({...formData,
        [e.target.name]: e.target.value})
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        onFormSumbit(formData)
    }

    return (
        <div className="newPlayerContainer">
            <form onSubmit={handleFormSubmit}>
                <div className="nameContainer">
                    <label id="firstName" htmlFor="firstName">First Name: </label>
                    <input onChange={handleFormChange} type="text" name="firstName" id="firstName" placeholder="Enter First Name"></input>
                    <label id="lastName" htmlFor="lastName">Last Name: </label>
                    <input onChange={handleFormChange} type="text" name="lastName" id="lastName" placeholder="Enter Last Name"></input>
                    <label id="number" htmlFor="number">Number: </label>
                    <input onChange={handleFormChange} type="text" name="number" id="number" placeholder="#"></input><hr/>
                </div>
                <div className="selectContainer">
                    <label htmlFor="grade" id="grade">Grade: </label>
                    <select onChange={handleFormChange} name="grade">
                        <option value="freshman">9</option>
                        <option value="sophomore">10</option>
                        <option value="junior">11</option>
                        <option value="senior">12</option>
                    </select>
                    <label htmlFor="team" id="team">Team: </label>
                    <select onChange={handleFormChange} name="team">
                        <option value="Varsity">Varsity</option>
                        <option value="JV">JV</option>
                        <option value="Freshman">Freshman</option>
                    </select>
                    <label htmlFor="position" id="position">Position: </label>
                    <select onChange={handleFormChange} name="position">
                        <option value="All">All</option>
                        <option value="O-Line">O-Line</option>
                        <option value="RB">RB</option>
                        <option value="WR/TE">WR/TE</option>
                        <option value="QB">QB</option>
                        <option value="D-Line">D-Line</option>
                        <option value="LB">LB</option>
                        <option value="DB">DB</option>
                    </select>
                </div><hr/>
                <label>Classes:</label><hr/>
                    <div className="classContainer">
                    <label htmlFor="periodOneClass">Period 1: </label>
                    <input onChange={handleFormChange} type="text" name="periodOneClass" id="period-1" placeholder="Enter Class"></input>
                    <label htmlFor="periodOneTeacher">Teacher: </label>
                    <input onChange={handleFormChange} type="text" name="periodOneTeacher" id="period-1" placeholder="Enter Teacher"></input><hr/>
                    
                    <label htmlFor="periodTwoClass">Period 2: </label>
                    <input onChange={handleFormChange} type="text" name="periodTwoClass" id="periodTwoClass" placeholder="Enter Class"></input>
                    <label htmlFor="periodTwoTeacher">Teacher: </label>
                    <input onChange={handleFormChange} type="text" name="periodTwoTeacher" id="periodTwoTeacher" placeholder="Enter Teacher"></input><hr/>

                    <label htmlFor="periodThreeClass">Period 3: </label>
                    <input onChange={handleFormChange} type="text" name="periodThreeClass" id="periodThreeClass" placeholder="Enter Class"></input>
                    <label htmlFor="periodThreeTeacher">Teacher: </label>
                    <input onChange={handleFormChange} type="text" name="periodThreeTeacher" id="periodThreeTeacher" placeholder="Enter Teacher"></input><hr/>

                    <label htmlFor="periodFourClass">Period 4: </label>
                    <input onChange={handleFormChange} type="text" name="periodFourClass" id="periodFourClass" placeholder="Enter Class"></input>
                    <label htmlFor="periodFourTeacher">Teacher: </label>
                    <input onChange={handleFormChange} type="text" name="periodFourTeacher" id="periodFourTeacher" placeholder="Enter Teacher"></input><hr/>

                    <label htmlFor="periodFiveClass">Period 5: </label>
                    <input onChange={handleFormChange} type="text" name="periodFiveClass" id="periodFiveClass" placeholder="Enter Class"></input>
                    <label htmlFor="periodFiveTeacher">Teacher: </label>
                    <input onChange={handleFormChange} type="text" name="periodFiveTeacher" id="periodFiveTeacher" placeholder="Enter Teacher"></input><hr/>

                    <label htmlFor="periodSixClass">Period 6: </label>
                    <input onChange={handleFormChange} type="text" name="periodSixClass" id="periodSixClass" placeholder="Enter Class"></input>
                    <label htmlFor="periodSixTeacher">Teacher: </label>
                    <input onChange={handleFormChange} type="text" name="periodSixTeacher" id="periodSixTeacher" placeholder="Enter Teacher"></input><hr/>

                    <label htmlFor="periodSevenClass">Period 7: </label>
                    <input onChange={handleFormChange} type="text" name="periodSevenClass" id="periodSevenClass" placeholder="Enter Class"></input>
                    <label htmlFor="periodSevenTeacher">Teacher: </label>
                    <input onChange={handleFormChange} type="text" name="periodSevenTeacher" id="periodSevenTeacher" placeholder="Enter Teacher"></input><br/>
                </div>
                <input type="submit" id="submit-form"></input>
            </form>
        </div>
    )
}

export default NewPlayerForm