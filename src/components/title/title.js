import React from "react";
import "./title.css";

const Title = props => (
    <div className="jumbotron">
        <h1 className="title">{props.title}</h1>
        <h4 className="instructions">{props.instructions}</h4>
        <div id="scores" className="justify-content-md-center">
            <span className="score" >Score: {props.score}</span>
            <span className="topScore">Top Score: {props.topScore}</span>
        </div>
    </div>
)

export default Title;