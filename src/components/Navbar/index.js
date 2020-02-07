
import React from "react";
import "./style.css";

function Navbar(props) {
    return (
    <div>
        <nav className="navbar">
        <h2>Click Game</h2>
        <h3>{props.bannerText}</h3>
        <h3>Score: {props.score} Top Score {props.topScore}</h3>
        </nav>
    </div>
    );
};

export default Navbar;