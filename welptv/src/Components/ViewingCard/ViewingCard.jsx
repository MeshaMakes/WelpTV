import "./ViewingCard.css";
import { React, useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import ScrapeContext from "../../Services/ScrapeContext";
import { ReactComponent as CloseIcon } from "../../Icons/close.svg";

function ViewingCard() {
  const location = useLocation();
  const cardRef = useRef();
  const [coords, setCoords] = useState({});

  const episodeNumber = (episode, currentEpisode) => {
    return (
      episode.findIndex((episode) => episode.url === currentEpisode.url) + 1
    );
  };

  const onDragStart = (e) => {
    if(cardRef){
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        offsetX: rect.left - e.pageX,
        offsetY: rect.top - e.pageY,
      });
    }
  };

  const onDrag = (e) => {
    if (e.pageX > 0 && e.pageY > 0) {
      setCoords({
        x: e.pageX,
        y: e.pageY,
        offsetX: coords.offsetX,
        offsetY: coords.offsetY,
      });
    }
  };

  const onDragEnd = () => {
    const rect = cardRef.current.getBoundingClientRect();
    if (
      coords.x + rect.width < window.innerWidth &&
      coords.y + rect.height < window.innerHeight
    ) {
      if (coords.x + rect.width > 0 && coords.y + rect.height > 0) {
        const left = (coords.x + coords.offsetX);
        const top = (coords.y + coords.offsetY);
        cardRef.current.style.left = left + "px";
        cardRef.current.style.top = top + "px";
      }
    }
  };

  if(location.pathname.includes("/series")) {
    return (
      <div></div>
    );
  } else {
    return (
      <ScrapeContext.Consumer>
        {(state) => {
          if (state.values.series && state.values.episode) {
            return (
              <div
                ref={cardRef}
                className="viewingCardContainer"
                draggable
                onDragStart={onDragStart}
                onDrag={onDrag}
                onDragEnd={onDragEnd}
              >
                <img
                  className="viewingCardImage"
                  src={state.values.series.image}
                  alt={state.values.series.name}
                />
  
                <div className="viewingDetails">
                  <h1 className="viewingTitle">{state.values.series.name}</h1>
                  <h1 className="viewingSubTitle">
                    {"Episode " +
                      episodeNumber(
                        state.values.series.episodes,
                        state.values.episode
                      )}
                  </h1>
                </div>
  
                <CloseIcon onClick={() => {
                  state.values.setSeries(null); 
                  state.values.setEpisode(null);
                }} />
              </div>
            );
          } else {
            return <div />;
          }
        }}
      </ScrapeContext.Consumer>
    );
  }
}

export default ViewingCard;
