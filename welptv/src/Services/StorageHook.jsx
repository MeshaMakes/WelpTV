
function StorageHook() {
  // recently views, favorites, watched episodes,
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
    let list = JSON.parse(localStorage.getItem(seriesName));
    if(!list){
        list = [];
    }
    list = list.filter((item)=>{
        return item.url !== episode.url;
    });
    list.unshift(episode);
    localStorage.setItem(seriesName, JSON.stringify(list));
  };
  const getEpisodes = (seriesName) => {
    let list = JSON.parse(localStorage.getItem(seriesName));
    if(!list){
        list = [];
    }
    return list;
  };

  const setRecent = (series) => {
    let list = JSON.parse(localStorage.getItem("recently"));
    if(list){
        list = list.filter((item)=>{ // remove duplicates
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
  };
  const getRecents = () => {
    let list = JSON.parse(localStorage.getItem("recently"));
    if(!list){
        list = [];
    }
    return list;
  };

  const setFavorite = (series) => {
    let list = JSON.parse(localStorage.getItem("favorites"));
    if(!list){
        list = [];
    }
    list.unshift(series);
    localStorage.setItem("favorites", JSON.stringify(list));
  };
  const getFavorites = () => {
    let list = JSON.parse(localStorage.getItem("favorites"));
    if(!list){
        list = [];
    }
    return list;
  };

  return {
    getEpisodes: getEpisodes,
    setEpisode: setEpisode,

    getRecents: getRecents,
    setRecent: setRecent,

    getFavorites: getFavorites,
    setFavorite: setFavorite,
  };
}

export default StorageHook;
