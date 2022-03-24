import React from 'react';
import "./InfoCard.css";

const InfoCard = (props) => {
    return (
        <div style={{ margin: props.margin ? props.margin : "0" }} className="infoCard">
            <h2>{props.title} </h2>
            <p>{props.desc} </p>
            {props.btnText !== "" && <button onClick={props.onClick}> {props.btnText} </button>}
        </div>
    );
}

export default InfoCard;
