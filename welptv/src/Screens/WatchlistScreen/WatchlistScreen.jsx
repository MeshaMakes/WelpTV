import React, { useContext } from "react";
import "./WatchlistScreen.css";
import ScrapeContext from "../../Utils/Contexts/ScrapeContext";
import { useNavigate } from "react-router-dom";
import useStorage from "../../Utils/Hooks/StorageHook";
import useSize from "../../Utils/Hooks/SizeHook";
import Navbar from "./../../Components/NavBar/NavBar";
import SeriesCard from "./../../Components/SeriesCard/SeriesCard";
import Loading from "./../../Components/Loading/Loading";
import Heading from "./../../Components/Heading/Heading";

function WatchlistScreen() {
  const contextState = useContext(ScrapeContext)
  const storageHook = useStorage();
  const sizeHook = useSize();

  return (
    <div ref={sizeHook.ref} className="watchlist">
      <div className="watchlistNavContainer">
        <Navbar />
      </div>

      <div className="watchlistMain">
        <Results
          list={storageHook.getWatchlist}
          scrapeSeries={contextState.scrapeSeries}
        />

      </div>
    </div>
  );
}

function Results({ list, scrapeSeries }) {
  const navigate = useNavigate()

  const openSeries = (item) => {
    scrapeSeries(item.url);
    navigate("/series");
  }

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
