import React from "react";
import './App.css';

function NavBar ({ onSearchChange, onSelectchange, onAddPlayerClick, onViewPlayersClick }) {

    function handleChange(e) {
        onSearchChange(e.target.value)
    }

    function handleSelectChange(e) {
        onSelectchange(e.target.value)
    }

    function handleAddPlayerClick (e) {
        onAddPlayerClick(e)
    }

    function handleViewPlayersClick(e) {
        onViewPlayersClick(e)
    }

    return (
        <div>
            <form className="navbar" id="navNameForm">
                <label>Player Name: </label>
                <input onChange={handleChange} type="text" name="player-name" placeholder="Enter Player's Name"></input>
            </form>
            <label htmlFor="team" id="team"></label>
            <select onChange={handleSelectChange} className="navbar" id="navSelectTeam">
                <option value="All">All</option>
                <option value="Varsity">Varsity</option>
                <option value="JV">JV</option>
                <option value="Freshman">Freshman</option>
            </select>
            <form className="navbar" id="navNumberForm">
                <label>Player Number: </label>
                <input type="text" name="player-number" placeholder="Enter Number"></input>
            </form>
            <button onClick={handleViewPlayersClick} className="button" id="viewPlayers">View Players</button>
            <button onClick={handleAddPlayerClick} className="button" id="addPlayer">Add Player</button>
        </div>
    )
}

export default NavBar