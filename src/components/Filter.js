import React from "react";
import '../App.css';

function Filter ({ onSearchChange, onSelectChange, onPositionChange }) {

    function handleNameChange(e) {
        onSearchChange(e.target.value)
    }

    function handleSelectChange(e) {
        onSelectChange(e.target.value)
    }

    function handlePositionChange(e) {
        onPositionChange(e.target.value)
    }

    return (
        <div>
             <label>Player Name: </label>
            <form className="filter" id="filterNameForm">
                <input onChange={handleNameChange} type="text" name="player-name" placeholder="Enter Player's Name"></input>
            </form>
            <label className="filter">Team: </label>
            <select onChange={handleSelectChange} className="filter" id="filterSelectTeam">
                <option value="All">All</option>
                <option value="Varsity">Varsity</option>
                <option value="JV">JV</option>
                <option value="Freshman">Freshman</option>
            </select>
            <label className="filter">Position: </label>
            <select onChange={handlePositionChange} className="filter" id="filterSelectPosition">
                <option value="All">All</option>
                <option value="O-Line">O-Line</option>
                <option value="RB">RB</option>
                <option value="QB">QB</option>
                <option value="WR/TE">WR/TE</option>
                <option value="D-Line">D-Line</option>
                <option value="LB">LB</option>
                <option value="DB">DB</option>
            </select>
        </div>
    )
}

export default Filter