import React from 'react'
import "./InfoCard.css"

const InfoCard = (props) => {
    return (
        <div className="infoCard">
            <h2> {props.title} </h2>
            <p> {props.desc} </p>
        </div>
    )
}

export default InfoCard
