import React, { useState } from "react";

function NewPlayerForm ({ onFormSumbit }) {

    const [formData, setFormData] = useState ({
        firstName: "",
        lastName: "",
        grade: "9",
        team: "Varsity",
        number: "",
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
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input onChange={handleFormChange} type="text" name="firstName" id="firstName" placeholder="Enter First Name"></input><br/>
                <label htmlFor="lastName">Last Name: </label>
                <input onChange={handleFormChange} type="text" name="lastName" id="lastName" placeholder="Enter Last Name"></input><br/>
                <label htmlFor="grade" id="grade">Grade: </label>
                <select onChange={handleFormChange} name="grade">
                    <option value="freshman">9</option>
                    <option value="sophomore">10</option>
                    <option value="junior">11</option>
                    <option value="senior">12</option>
                </select><br/>
                <label htmlFor="team" id="team">Team: </label>
                <select onChange={handleFormChange} name="team">
                    <option value="Varsity">Varsity</option>
                    <option value="JV">JV</option>
                    <option value="Freshman">Freshman</option>
                </select><br/>
                <label htmlFor="number">Number: </label>
                <input onChange={handleFormChange} type="text" name="number" id="number" placeholder="Enter Number"></input><br/>
                <label>Classes:</label><br/>
                <label>Period 1: </label><br/>
                <label htmlFor="periodOneClass">Class: </label>
                <input onChange={handleFormChange} type="text" name="periodOneClass" id="period-1" placeholder="Enter Class"></input>
                <label htmlFor="periodOneTeacher">Teacher: </label>
                <input onChange={handleFormChange} type="text" name="periodOneTeacher" id="period-1" placeholder="Enter Teacher"></input><br/>
                
                <label>Period 2: </label><br/>
                <label htmlFor="periodTwoClass">Class: </label>
                <input onChange={handleFormChange} type="text" name="periodTwoClass" id="periodTwoClass" placeholder="Enter Class"></input>
                <label htmlFor="periodTwoTeacher">Teacher: </label>
                <input onChange={handleFormChange} type="text" name="periodTwoTeacher" id="periodTwoTeacher" placeholder="Enter Teacher"></input><br/>

                <label>Period 3: </label><br/>
                <label htmlFor="periodThreeClass">Class: </label>
                <input onChange={handleFormChange} type="text" name="periodThreeClass" id="periodThreeClass" placeholder="Enter Class"></input>
                <label htmlFor="periodThreeTeacher">Teacher: </label>
                <input onChange={handleFormChange} type="text" name="periodThreeTeacher" id="periodThreeTeacher" placeholder="Enter Teacher"></input><br/>

                <label>Period 4: </label><br/>
                <label htmlFor="periodFourClass">Class: </label>
                <input onChange={handleFormChange} type="text" name="periodFourClass" id="periodFourClass" placeholder="Enter Class"></input>
                <label htmlFor="periodFourTeacher">Teacher: </label>
                <input onChange={handleFormChange} type="text" name="periodFourTeacher" id="periodFourTeacher" placeholder="Enter Teacher"></input><br/>

                <label>Period 5: </label><br/>
                <label htmlFor="periodFiveClass">Class: </label>
                <input onChange={handleFormChange} type="text" name="periodFiveClass" id="periodFiveClass" placeholder="Enter Class"></input>
                <label htmlFor="periodFiveTeacher">Teacher: </label>
                <input onChange={handleFormChange} type="text" name="periodFiveTeacher" id="periodFiveTeacher" placeholder="Enter Teacher"></input><br/>

                <label>Period 6: </label><br/>
                <label htmlFor="periodSixClass">Class: </label>
                <input onChange={handleFormChange} type="text" name="periodSixClass" id="periodSixClass" placeholder="Enter Class"></input>
                <label htmlFor="periodSixTeacher">Teacher: </label>
                <input onChange={handleFormChange} type="text" name="periodSixTeacher" id="periodSixTeacher" placeholder="Enter Teacher"></input><br/>

                <label>Period 7: </label><br/>
                <label htmlFor="periodSevenClass">Class: </label>
                <input onChange={handleFormChange} type="text" name="periodSevenClass" id="periodSevenClass" placeholder="Enter Class"></input>
                <label htmlFor="periodSevenTeacher">Teacher: </label>
                <input onChange={handleFormChange} type="text" name="periodSevenTeacher" id="periodSevenTeacher" placeholder="Enter Teacher"></input><br/>

                <input type="submit" id="submit-form"></input>
            </form>
        </div>
    )
}

export default NewPlayerForm