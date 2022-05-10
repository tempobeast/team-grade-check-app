import React from "react";
import '../App.css';

function Home() {
    return(
        <div>
            <h2 id="welcome">Welcome to Student Grade Checker!</h2>
            <p className="about" id="tagline">Add players, enter grades and keep athletes eligible!</p>
            <hr id="hrHome"></hr>
            <p className="about"><span style={{color: "red"}}>Red</span> means the player has a failing grade.</p>
            <p className="about"><span style={{color: "yellow"}}>Yellow</span> means the player has a near-failing grade.</p>
            <p className="about">White means the player is good to go!</p>
        </div>
    )
}

export default Home