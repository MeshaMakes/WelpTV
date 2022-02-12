import { React, useRef } from "react";
import "./SeriesScreen.css";
import ScrapeContext from "../../Utils/Contexts/ScrapeContext";
import useSize from "../../Utils/Hooks/SizeHook";
import useStorage from "../../Utils/Hooks/StorageHook";
import Navbar from "../../Components/NavBar/NavBar";
import Loading from "../../Components/Loading/Loading";
import { ReactComponent as Play } from "../../Icons/play.svg";
import { ReactComponent as Eye } from "../../Icons/eye.svg";

const SeriesScreen = () => {
  const sizeHook = useSize();
  return (
    <ScrapeContext.Consumer>
      {(state) => {
        return (
          <div ref={sizeHook.ref} className="series">
            <div className="seriesNavContainer">
              <Navbar />
            </div>

            <div className="seriesMain">
              <div className="seriesContent">
                <VideoSection episode={state.episode} />
                <InfoSection series={state.series} />
              </div>

              <EpisodeSection
                episodes={state?.series?.episodes}
                scrapeEpisode={(episodeUrl)=>{
                  state.scrapeEpisode(state.series.name, episodeUrl);
                }}
                currentEpisode={state.episode}
              />
            </div>
          </div>
        );
      }}
    </ScrapeContext.Consumer>
  );
};



function VideoSection({ episode }) {
  const iframeRef = useRef();

  if (episode) {
    return (
      <div className="video">
        <iframe
          ref={iframeRef}
          src={episode.videoUrl}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          title="anything"
          onLoad={() => {
            var width = iframeRef.current.getBoundingClientRect().width;
            iframeRef.current.style.height = width / 1.75 + "px";
          }}
        ></iframe>
      </div>
    );
  } else {
    return <Loading />;
  }
}

function InfoSection({ series }) {
  const storageHook = useStorage();
  if (series) {
    return (
      <div className="seriesDetails">
        <div className="seriesDetailsRow">
          <img src={series.image} alt="sumn" />


          <div className="info">
            <h1 className="seriesTitle">{series.name}</h1>
            <h1 className="seriesStatus">{series.status}</h1>
            <div className="genres">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
            </div>

          </div>

          <h4 onClick={() => {
            storageHook.setWatchlist(series);
          }}>{(storageHook.getWatchlist.find(e => e.url === series.url)) ? "Unsave" : "Save" }</h4>
          
        </div>

        <p className="description">{series.description}</p>
      </div>
    );
  } else {
    return <Loading />;
  }
}

function EpisodeSection({ episodes, scrapeEpisode, currentEpisode }) {
  if (episodes && scrapeEpisode) {
    return (
      <div className="episodesSection">
        <div className="episodeDetails"> HI </div>
        <div className="episodeList">
          {episodes.map(function (data, index) {
            if (currentEpisode?.url === data.url) {
              return (
                <div key={data.url} className="episode episode-current">
                  <Play />
                  <h1>episode {index + 1}</h1>
                  <Eye />
                </div>
              );
            } else {
              return (
                <div
                  key={data.url}
                  className="episode"
                  onClick={() => {
                    scrapeEpisode(data.url);
                  }}
                >
                  <Play />
                  <h1>episode {index + 1}</h1>
                  <Eye />
                </div>
              );
            }
          })}
        </div>
        <div className="episodeSegments">bYE</div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default SeriesScreen;
