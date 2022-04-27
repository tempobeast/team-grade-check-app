import React from "react";
import './App.css';


function PlayerList({ players, onPlayerClick, search, teamSelect }) {

    function handleClick(e) {
        onPlayerClick(e.target.id)
    }

    const teamCategory = players.filter((player) => {
        if (teamSelect === "All") {
            return true
        } else {
            return player.team === teamSelect
        }
        })

    const playerSearch = teamCategory.filter((player) => {
        if (player.firstName.toLowerCase().startsWith(search.toLowerCase()) || player.lastName.toLowerCase().startsWith(search.toLowerCase())) {
            return player
        } else {
            return false
        }
    })

    return (
        <div className="playerList">
            <h2>Players: </h2>
            {playerSearch.map((player) => <p key={player.id} id={player.id} onClick={handleClick}>{player.lastName}, {player.firstName} - {player.team} #{player.number}</p>)}
        </div>
    )
}

export default PlayerList