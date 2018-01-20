import React from "react";
import "./Title.css";

const Title = props => 
    <div>
        <h1 className="title">Click Memory Game</h1>
        <h4>Don't click the same image twice!</h4>
        <h3>Score: {props.score}</h3>
    </div>;

export default Title;
