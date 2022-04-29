import React from "react";
import './App.css';


function PlayerList({ players, onPlayerClick, search, teamSelect, selectPosition }) {
    console.log(players)

    function handleClick(e) {
        onPlayerClick(e.target.id)
    }

    const alphaPlayers = players.sort((a,b) => {
        if (a.lastName > b.lastName) {
            return 1
        } else if (a.lastName === b.lastName && a.firstName > b.firstName) {
            return 1
        } else if (a.lastName === b.lastName && b.firstName > a.firstName) {
            return -1
        } else if (b.lastName > a.lastName) {
            return -1
        } else {
            return 0
        }
    })

    const playerPosition = alphaPlayers.filter((player) => {
        if (selectPosition === "All") {
            return true
        } else {
            return player.position === selectPosition
        }
    })

    const teamCategory = playerPosition.filter((player) => {
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
            <h3 id="playerListTitle">Players: </h3>
            {playerSearch.map((player) => <p to={`/player/${player.id}`} key={player.id} id={player.id} onClick={handleClick}>{player.lastName}, {player.firstName} - {player.team} #{player.number}</p>)}
        </div>
    )
}

export default PlayerList