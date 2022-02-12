/* this context/service is repsonsible for providing the scraper's
state throughout the app (current search reuslts, current episode and such)
*/
import React, { useState, useEffect } from "react"
import switchSelector from "../Utils/Scrapers/ScraperSelector"
import ScrapeContext from "../Utils/Contexts/ScrapeContext"
import useStorage from "../Utils/Hooks/StorageHook"

const ContextState = () => {
  const storageHook = useStorage()
  const [latest, setLatest] = useState()
  const [series, setSeries] = useState()
  const [episode, setEpisode] = useState()
  const [searchResults, setSearchResults] = useState()
  let currentServer = 0 // need to get the actual value of the user's selected server

  const scrapeLatest = () => {
    switchSelector(currentServer, 0, null).then((data) => {
      setLatest(data)
    })
  }

  const scrapeSearch = (searchKey) => {
    setSearchResults(null)
    switchSelector(currentServer, 1, searchKey).then((data) => {
      setSearchResults(data)
    })
  }

  const scrapeSeries = (url) => {
    if(series?.url !== url) { //if trying to get different series
      setEpisode(null)

      switchSelector(currentServer, 2, url).then((data) => {
        storageHook.setRecent(data)
        scrapeEpisode(data.name, data.episodes[0].url)
        setSeries(data)
      })
    }
  }

  const scrapeEpisode = (seriesName, url) => {
    if(episode?.url !== url) { // if trying to get different episode
      setEpisode(null)
      switchSelector(currentServer, 3, url).then((data) => {
        storageHook.setEpisode(seriesName, data)
        setEpisode(data)
      })
    }
  }

  return {
    latest,
    setLatest,
    series,
    setSeries,
    episode,
    setEpisode,
    searchResults,
    setSearchResults,
    scrapeLatest: scrapeLatest,
    scrapeSearch: scrapeSearch,
    scrapeSeries: scrapeSeries,
    scrapeEpisode: scrapeEpisode,
  };
}

const ScrapeContextProvider = (props) => {
  const state = ContextState()

  useEffect(() => {
    if(state){
      state.scrapeLatest()
      state.scrapeSearch("hunter")
    }
    // eslint-disable-next-line
  }, [])

  return (
    <ScrapeContext.Provider value={state}>
      {props.children}
    </ScrapeContext.Provider>
  )
}

export default ScrapeContextProvider
