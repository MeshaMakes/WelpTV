import { React, useRef, useEffect } from "react";
import "./SeriesCard.css";

const SeriesCard = (props) => {
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef && cardRef?.current) {
      var width = cardRef.current.getBoundingClientRect().width
      var img = cardRef.current.firstElementChild;
      img.style.height = (width/0.75) + "px";
    }
  }, [cardRef]);

  if (props.type === "thumbnail") {
    return (
      <div className="thumbnail" style={{ backgroundImage: props.data.image }}>
        <div className="overlay" style={{ backgroundColor: props.data.color }}>
          <h1 className="topTitle">THE TOP 10</h1>
          <h1 className="subTitle">{props.data.title}</h1>
        </div>
      </div>
    );
  } else if (props.type === "poster") {
    return (
      <div ref={cardRef} className="poster">
        <img
          className="posterImage"
          src={props.data.image}
          alt={props.data.title}
        />
        <h1 className="title">{props.data.title}</h1>
        <h1 className="subTitle">{props.data.season}</h1>
      </div>
    );
  } else {
    return (
      <div className="ticket">
        <img
          className="ticketImage"
          src={props.data.image}
          alt={props.data.title}
        />
        <div className="details">
          <h1 className="title">{props.data.title}</h1>
          <h1 className="subTitle">{props.data.season}</h1>
        </div>
      </div>
    );
  }
};

export default SeriesCard;
