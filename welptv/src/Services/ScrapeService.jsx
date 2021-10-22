import React, { useState, useEffect } from "react";
import ScrapeContext from "./ScrapeContext";
import useStorage from "./StorageHook";

const Values = () => {
  const [latest, setLatest] = useState();
  //const [watchlist, setWatchlist] = useState();
  const [series, setSeries] = useState();
  const [episode, setEpisode] = useState();
  const [searchResults, setSearchResults] = useState();

  return {
    latest,
    setLatest,
    //watchlist,
    //setWatchlist,
    series,
    setSeries,
    episode,
    setEpisode,
    searchResults,
    setSearchResults,
  };
};

const ScrapeContextProvider = (props) => {
  const storageHook = useStorage();
  const values = Values();

  const scrapeEpisode = (seriesName, url) => {
    if (values.episode?.url !== url) {
      values.setEpisode(null);
      getEpisode(url).then((data) => {
        storageHook.setEpisode(seriesName, data);
        values.setEpisode(data);
      });
    }
  };

  const scrapeSeries = (url) => {
    if (values.series?.url !== url) {
      values.setEpisode(null);
      getInfo(url).then((data) => {
        storageHook.setRecent(data,);
        scrapeEpisode(data.name, data.episodes[0].url);
        values.setSeries(data);
      });
    }
  };

  // const scrapeWatchlist = (url) => {
  //   if (values.series?.url !== url) {
  //     values.setEpisode(null);
  //     getInfo(url).then((data) => {
  //       storageHook.setWatchlist(data,);
  //       scrapeEpisode(data.name, data.episodes[0].url);
  //       values.setWatchlist(data);
  //     });
  //   }
  // };

  const scrapeLatest = () => {
    latest().then((data) => {
      values.setLatest(data);
    });
  };

  const scrapeSearch = (searchKey) => {
    values.setSearchResults(null);
    search(searchKey).then((data) => {
      values.setSearchResults(data);
    });
  }

  const state = {
    values: values,
    scrapeLatest: scrapeLatest,
    //scrapeWatchlist : scrapeWatchlist,
    scrapeSearch: scrapeSearch,
    scrapeSeries: scrapeSeries,
    scrapeEpisode: scrapeEpisode,
  };

  useEffect(() => {
    scrapeLatest();
    scrapeSearch("hunter x");
  }, []);

  return (
    <ScrapeContext.Provider value={state}>
      {props.children}
    </ScrapeContext.Provider>
  );
};


//********************************************************************** */


async function latest() {
  const corsProxy = "https://api.allorigins.win/get?url=";
  const url = corsProxy + "https://www.animekisa.cc/home";
  return fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        // get error message from body or default to response statusText
        //const error = (data && data.message) || response.statusText;
        //console.error('error:', error);
      }
    })
    .then(function (data) {
      let list = [];
      var page = new DOMParser().parseFromString(stringFix(data), "text/html");

      const items = page.querySelector(
        "div.main-container div.maindark div.mwb-2col div.mwb-left div.episode"
      );

      for (let i = 0; i < items.children.length; i++) {
        const obj = new DOMParser().parseFromString(
          items.children[i].outerHTML,
          "text/html"
        );
        const img = obj.querySelector("div.epi-img img").getAttribute("src");
        const name = obj.querySelector("div.epi-inf div.epi-tit").innerHTML;
        const url = obj
          .querySelector("a")
          .getAttribute("href")
          .replace("/category/", "");
        const status = obj
          .querySelector("div.epi-inf div.epi-no")
          .innerHTML.trim();
        list[i] = {
          image: img,
          name: name,
          url: url,
          extra: status,
        };
      }
      return list;
    });
}

async function search(val) {
  const corsProxy = "https://api.allorigins.win/get?url=";
  const url = corsProxy + "https://www.animekisa.cc/search?name=" + val;
  return fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        // get error message from body or default to response statusText
        //const error = (data && data.message) || response.statusText;
        //console.error('error:', error);
      }
    })
    .then(function (data) {
      let list = [];
      var page = new DOMParser().parseFromString(stringFix(data), "text/html");

      const items = page.querySelector(
        "div.main-container div.maindark div.zr-list ul"
      );

      for (let i = 0; i < items.children.length; i++) {
        const obj = new DOMParser().parseFromString(
          items.children[i].innerHTML,
          "text/html"
        );
        const img = obj.querySelector("a div img").getAttribute("src");
        const name = obj.querySelector("a div span.result-title").innerHTML;
        const url = obj
          .querySelector("a.asfo")
          .getAttribute("href")
          .replace("/category/", "");
        const status = obj
          .querySelector("a div span.result-latest")
          .innerHTML.trim();
        list[i] = {
          image: img,
          name: name,
          url: url,
          extra: status,
        };
      }

      return list;
    });
}

async function getInfo(seriesUrl) {
  const corsProxy = "https://api.allorigins.win/get?url=";
  const url = corsProxy + seriesUrl;
  return fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        // get error message from body or default to response statusText
        //const error = (data && data.message) || response.statusText;
        //console.error('error:', error);
      }
    })
    .then(function (data) {
      var page = new DOMParser().parseFromString(stringFix(data), "text/html");

      const image = page.querySelector(
        "div.main-container div.maindark div.mwb-left div.anime-group div.infoboxc div.infopicbox img.posteri"
      );
      const title = page.querySelector(
        "div.main-container div.maindark div.mwb-left div.anime-group div.infoboxc div.infodesbox h1.infodes"
      );
      const desc = page.querySelector(
        "div.main-container div.maindark div.mwb-left div.anime-group div.infoboxc div.infodesbox div.infodes2"
      );
      const details = page.querySelectorAll(
        "div.main-container div.maindark div.mwb-left div.anime-group div.infoboxc div.infodesbox div.infodes2 div.textc"
      );
      const genre = details[0];
      const status = details[1];
      const episodeList = page.querySelector(
        "div.main-container div.maindark div.mwb-left div.anime-group div.infoepboxmain div.infoepbox"
      );

      const imageSrc = image.getAttribute("src");
      const titleSrc = title.innerHTML;
      const descSrc = desc.innerHTML;
      let genres = [];
      const statusSrc = status.innerHTML;
      let episodes = [];

      for (let i = 0; i < genre.children.length; i++) {
        const obj = new DOMParser().parseFromString(
          genre.children[i].innerHTML,
          "text/html"
        );
        const name = obj.querySelector("span.as").textContent;
        genres[i] = name;
      }

      for (let i = 0; i < episodeList.children.length; i++) {
        const obj = new DOMParser().parseFromString(
          episodeList.children[i].outerHTML,
          "text/html"
        );
        const episodeSrc = obj.querySelector("a.infovan").getAttribute("href");
        const episodeNumber = obj.querySelector(
          "a div.infoept2 div.centerv"
        ).textContent;
        const episodeAired = obj.querySelector(
          "a div.infoept3 div.centerv"
        ).textContent;
        episodes[i] = {
          url: episodeSrc,
          number: episodeNumber,
          aired: episodeAired,
        };
      }
      return {
        url: seriesUrl,
        image: imageSrc,
        name: titleSrc,
        description: descSrc,
        genres: genres,
        status: statusSrc,
        episodes: episodes.reverse(),
      };
    });
}

async function getEpisode(episodeUrl) {
  const corsProxy = "https://api.allorigins.win/get?url=";
  const url = corsProxy + episodeUrl;
  return fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        // get error message from body or default to response statusText
        //const error = (data && data.message) || response.statusText;
        //console.error('error:', error);
      }
    })
    .then(function (data) {
      var page = new DOMParser().parseFromString(stringFix(data), "text/html");

      const iframe = page.querySelector(
        "div.main-container div.maindark div#my-video1 iframe#iframe-to-load"
      );

      const videoSrc = iframe.getAttribute("src");

      return {
        url: episodeUrl, // this is the episode url on the website
        videoUrl: videoSrc, // this is the iframe Url gotten off of the [episodeUrl] webpage
      };
    });
}

function stringFix(badString) {
  return badString
    .replaceAll("&amp;", "&")
    .replaceAll('\\"', "")
    .replaceAll("&apos;", "'")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<");
}

export default ScrapeContextProvider;
