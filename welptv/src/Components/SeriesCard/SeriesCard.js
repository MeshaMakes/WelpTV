import React from 'react';
import "./SeriesCard.css";

const SeriesCard = (props) => {
    if(props.type === "thumbnail"){
        console.log(props);
        return (
            <div className="thumbnail" style={{backgroundImage: props.data.image}}>
                <div className="overlay" style={{backgroundColor: props.data.color}}></div>
                <h1 className="topTitle">THE TOP 10</h1>
                <h1 className="subTitle">{props.data.title}</h1>
            </div>
        );
    }else if(props.type === "poster"){
        return (
            <div className="poster">
            <img className="posterImage" src={props.data.image} alt={props.data.title}/>
                <h1 className="title">{props.data.title}</h1>
                <h1 className="subTitle">{props.data.season}</h1>
            </div>
        );
    }else{
        return (
            <div className="ticket">
                <img className="ticketImage" src={props.data.image} alt={props.data.title}/>
                <div className="details">
                    <h1 className="title">{props.data.title}</h1>
                    <h1 className="subTitle">{props.data.season}</h1>
                </div>
            </div>
        );
    }
}

export default SeriesCard;
