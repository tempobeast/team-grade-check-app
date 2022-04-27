import React from "react";
import { NavLink } from "react-router-dom"
import './App.css';

function NavBar () {

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-player">Add Player</NavLink>
            <NavLink to="/players">View Players</NavLink>
        </nav>
    )
}

export default NavBar