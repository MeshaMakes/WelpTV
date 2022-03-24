import { useEffect, useState } from "react"

function StorageHook() {
  // recently views, favorites, watched episodes,
  const [episodeState, setEpisodeState] = useState([]);
  const [recentState, setRecentState] = useState([]);
  const [watchlistState, setWatchlistState] = useState([]);

  const episodeNumber = (episode, currentEpisode) => {
      if(currentEpisode){
        return (
            episode.findIndex((episode) => episode.url === currentEpisode.url) + 1
        );
      }else{
          return 1;
      }
  };
  
  const setEpisode = (seriesName, episode) => {
    //* updates the list of watched episodes of a particular series
    let list = JSON.parse(localStorage.getItem(seriesName));
    if(!list){
        list = [];
    }
    list = list.filter((item)=>{
        return item.url !== episode.url;
    });
    list.unshift(episode);
    localStorage.setItem(seriesName, JSON.stringify(list));
    setEpisodeState(list);
  };

  const getEpisodes = (seriesName) => {
    //* gets the watched episodes of particular series
    let list = JSON.parse(localStorage.getItem(seriesName));
    if(!list){
        list = [];
    }
    return list;
  };

  const setRecent = (series) => {
    let list = JSON.parse(localStorage.getItem("recently"));
    if(list){
        list = list.filter((item)=>{ //* remove duplicates
            return item.url !== series.url;
        });
    }else{
        list = [];
    }
    const watchedEpisodes = getEpisodes(series.name);
    series.progress = episodeNumber(series.episodes, watchedEpisodes[0]);
    list.unshift(series);
    if (list.length > 12) {
      list = list.slice(0, 12);
    }
    localStorage.setItem("recently", JSON.stringify(list));
    setRecentState(list);
  };

  const getRecents = () => {
    let list = JSON.parse(localStorage.getItem("recently"));
    if(!list){
        list = [];
    }
    return list;
  };

  const setWatchlist = (series) => {
    let list = JSON.parse(localStorage.getItem("watchlist"));
    if(!list){
        list = [];
    }

    if(list.find(e => e.url === series.url)) {
      //* check if list contains series => remove it
      const index = list.findIndex(e => e.url === series.url);
      list.splice(index, 1);
    } else {
      //* check if list does not contain series => add it
      list.unshift(series);
    }

    localStorage.setItem("watchlist", JSON.stringify(list));
    setWatchlistState(list);
  };
  
  const getWatchlist = () => {
    let list = JSON.parse(localStorage.getItem("watchlist"));
    if(!list){
        list = [];
    }
    return list;
  };

  useEffect(() => {
    setRecentState(getRecents());
    setWatchlistState(getWatchlist());
  }, []);

  return {
    getEpisodes: episodeState,
    setEpisode: setEpisode,

    getRecents: recentState,
    setRecent: setRecent,

    getWatchlist: watchlistState,
    setWatchlist: setWatchlist,
  };
}

export default StorageHook;
