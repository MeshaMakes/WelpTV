import React from "react";
import "./WatchlistScreen.css";
import ScrapeContext from "../../Services/ScrapeContext";
import { useHistory } from "react-router-dom";
import useStorage from "../../Services/StorageHook";
import Navbar from "./../../Components/NavBar/NavBar";
import SeriesCard from "./../../Components/SeriesCard/SeriesCard";
import Loading from "./../../Components/Loading/Loading";
import Heading from "./../../Components/Heading/Heading";

function WatchlistScreen() {
  const storageHook = useStorage();

  return (
    <ScrapeContext.Consumer>
      {(state) => {
        return (
          <div className="watchlist">
            <div className="watchlistNavContainer">
              <Navbar />
            </div>

            <div className="watchlistMain">
              <Results
                list={storageHook.getWatchlist()}
                scrapeSeries={state.scrapeSeries}
              />

            </div>
          </div>
        );
      }}
    </ScrapeContext.Consumer>
  );
}

function Results({ list, scrapeSeries }) {
  let history = useHistory();
  const openSeries = (item) => {
    scrapeSeries(item.url);
    history.push("/series");
  };

  if (list) {
    return (
      <Heading
        title={list.length + " Saved in Watchlist"}
        margin="0rem 0rem 3rem 0rem"
        padding="1.5rem 0"
      >
        <div className="watchlistSeriesGrid">
          {list?.map(function (item) {
            return (
              <SeriesCard
                key={item.url}
                type="poster"
                data={item}
                onClick={() => {
                  openSeries(item);
                }}
              />
            );
          })}
        </div>
      </Heading>
    );
  } else {
    return <Loading></Loading>;
  }
}

export default WatchlistScreen;
