import React from "react";
import { NavLink } from "react-router-dom"
import '../App.css';

function NavBar () {

    return (
        <nav className="navBar">
            <NavLink className="button" to="/">Home</NavLink>
            <NavLink className="button" to="/players">View Players</NavLink>
            <NavLink className="button" to="/add-player">Add Player</NavLink>
        </nav>
    )
}

export default NavBar