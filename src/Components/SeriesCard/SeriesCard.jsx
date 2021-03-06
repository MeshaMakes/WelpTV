import { React, useRef, useEffect } from "react";
import "./SeriesCard.css";

const SeriesCard = (props) => {
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef && cardRef?.current) {
      var width = cardRef.current.getBoundingClientRect().width;
      var img = cardRef.current.firstElementChild;
      img.style.height = width / 0.75 + "px";
    }
  }, [cardRef]);

  if(!props.data){
    return <div></div>;
  }
  
  if (props.type === "thumbnail") {
    return (
      <div onClick={props.onClick}
          className="thumbnail"
          style={{ backgroundImage: props.data.image }}
        >
          <div
            className="thumbnailOverlay"
            style={{ backgroundColor: props.data.color }}
          >
            <h1 className="thumbnailTitle">THE TOP 10</h1>
            <h1 className="cardSubTitle">{props.data.title}</h1>
          </div>
        </div>
    );
  } else if (props.type === "poster") {
    return (
      <div ref={cardRef} className="poster" onClick={props.onClick}>
          <img
            className="posterImage"
            src={props.data.image}
            alt={props.data.name}
          />
          <h1 className="cardTitle">{props.data.name}</h1>
          <h1 className="cardSubTitle">{props.data.extra}</h1>
        </div>
    );
  } else {
    return (
      <div className="ticket" onClick={props.onClick}>
          <img
            className="ticketImage"
            src={props.data.image}
            alt={props.data.name}
          />
          <div className="ticketDetails">
            <h1 className="cardTitle">{props.data.name}</h1>
            <h1 className="cardSubTitle">{"Episode " + props.data.progress}</h1>
          </div>
        </div>
      
    );
  }
};

export default SeriesCard;
