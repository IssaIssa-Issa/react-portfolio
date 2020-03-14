import React from "react";
import './style.css';

const Card = (props) => {
    return (
        <div className="card text-center" style={{border:"solid darkgray", color:"black"}}>
            <img className="card-img-top" src={props.imgSrc} alt={props.name} />
            <div className="card-body" style={{backgroundColor:"lightgrey"}}>
                <h5 className="card-title">{props.name}</h5>
                <a href={props.firstHref}>repository</a>
                <br />
                <a href={props.secondHref}>application</a>
            </div>
        </div>
    )
}

export default Card;
