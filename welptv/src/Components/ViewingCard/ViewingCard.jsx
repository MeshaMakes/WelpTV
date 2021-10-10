import "./ViewingCard.css";
import React from "react";
import ScrapeContext from "../../Services/ScrapeContext";
import { ReactComponent as CloseIcon } from "../../Icons/close.svg";

function ViewingCard() {
  const episodeNumber = (epsiodes, currentEpisode) => {
    return (
      epsiodes.findIndex((epsiode) => epsiode.url === currentEpisode.url) + 1
    );
  };

  return (
    <ScrapeContext.Consumer>
      {(state) => {
        if (state.values.series && state.values.episode) {
          return (
            <div className="viewingCardContainer">
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
              <CloseIcon />
            </div>
          );
        } else {
          return <div />;
        }
      }}
    </ScrapeContext.Consumer>
  );
}

export default ViewingCard;
