import React from 'react';
import "./NotificationCard.css";

const NotificationCard = (props) => {
    return (
        <div style={{ margin: props.margin ? props.margin : "0" }} className="notificationCard">
            <h2>{props.title} </h2>
            <p>{props.desc} </p>
            {props.btnText !== "" && <button onClick={props.onClick}> {props.btnText} </button>}
        </div>
    );
}

export default NotificationCard;
