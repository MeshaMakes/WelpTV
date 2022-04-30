import { React, useRef, useEffect } from "react";
import "./SeriesCard.css";

const SeriesCard = ({ type, data, onClick }) => {
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef && cardRef?.current) {
      var width = cardRef.current.getBoundingClientRect().width;
      var img = cardRef.current.firstElementChild;
      img.style.height = width / 0.75 + "px";
    }
  }, [cardRef]);

  if(!data){
    return <div></div>;
  }
  
  if (type === "thumbnail") {
    return (
      <div onClick={onClick}
        className="thumbnail"
        style={{ backgroundImage: data.image }}
      >
        <div
          className="thumbnailOverlay"
          style={{ backgroundColor: data.color }}
        >
          <h1 className="thumbnailTitle">THE TOP 10</h1>
          <h1 className="cardSubTitle">{data.name}</h1>
        </div>
      </div>
    );
  }

  if (type === "poster") {
    return (
      <div ref={cardRef} className="poster" onClick={onClick}>
        <img
          className="posterImage"
          src={data.image}
          alt={data.name}
        />
        <h1 className="cardTitle">{data.name}</h1>
        <h1 className="cardSubTitle">{data.extra}</h1>
      </div>
    );
  }

  return (
    <div className="ticket" onClick={onClick}>
      <img
        className="ticketImage"
        src={data.image}
        alt={data.name}
      />
      <div className="ticketDetails">
        <h1 className="cardTitle">{data.name}</h1>
        <h1 className="cardSubTitle">{"Episode " + data.progress}</h1>
      </div>
    </div>
    
  );
};

export default SeriesCard;
