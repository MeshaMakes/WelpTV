import React from 'react';
import "./SeriesCard.css";

const SeriesCard = (props) => {
    if(props.type === "thumbnail"){
        console.log(props);
        return (
            <div className="thumbnail" style={{backgroundImage: props.data.image}}>
                <div className="overlay" style={{backgroundColor: props.data.color}}></div>
                <h1 className="fadeTitle">THE TOP 10</h1>
                <h1 className="subTitle">{props.data.title}</h1>
            </div>
        );
    }else if(props.type === "poster"){
        return (
            <div className="poster">
                <img className="image" src={props.data.image} alt={props.data.title}/>
                <h1 className="posterTitle">{props.data.title}</h1>
                <h1 className="subTitle">{props.data.season}</h1>
            </div>
        );
    }else{
        return (
            <div className="ticket">
                <h1 className="fadeTitle">THE TOP 10</h1>
                <h1 className="title">Jujustsu Kaisen</h1>
            </div>
        );
    }
}

export default SeriesCard;
