import "./SearchScreen.css";
import { useContext } from "react"
import ScrapeContext from "../../Utils/Contexts/ScrapeContext";
import { useNavigate } from "react-router-dom";
import useSize from "../../Utils/Hooks/SizeHook";
import Navbar from "../../Components/NavBar/NavBar";
import SeriesCard from "../../Components/SeriesCard/SeriesCard";
import Search from "../../Components/SearchBar/SearchBar";
import Loading from "../../Components/Loading/Loading";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import TextForm from "../../Components/TextForm/TextForm"

function SearchScreen() {
  const contextState = useContext(ScrapeContext)
  const sizeHook = useSize()

  return (
    <div ref={sizeHook.ref} className="search">
      <div className="searchNavContainer">
        <Navbar />
      </div>
    
      <div className="searchMain">

        <TextForm style={{ width: "100%", margin: "0 0 2rem 0", padding: "0" }} onSubmitted={(val) => contextState.scrapeSearch(val)}>
          <input className="input" type="text" placeholder="Search" />
        </TextForm>

        {/* <Search margin="0 0 2rem 0" onSubmitted={(val) => contextState.scrapeSearch(val)}/> */}

        <Results
          list={contextState?.searchResults}
          scrapeSeries={contextState.scrapeSeries}
        />
      </div>
    </div>
  );
}

function Results({ list, scrapeSeries }) {
  const navigate = useNavigate()

  const openSeries = (item) => {
    scrapeSeries(item.url)
    navigate("/series")
  }

  if (list) {
    return (
      <SectionHeader
        title={list.data.length + " Results"}
        margin="0rem 0rem 3rem 0rem"
        padding="1.5rem 0"
      >
        <div className="searchSeriesGrid">
          {list.data?.map(function (item) {
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
      </SectionHeader>
    );
  } else {
    return <Loading></Loading>;
  }
}

export default SearchScreen;
