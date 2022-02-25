import "./SearchScreen.css";
import ScrapeContext from "../../Utils/Contexts/ScrapeContext";
import { useNavigate } from "react-router-dom";
import useSize from "../../Utils/Hooks/SizeHook";
import Navbar from "../../Components/NavBar/NavBar";
import SeriesCard from "../../Components/SeriesCard/SeriesCard";
import Search from "../../Components/SearchBar/SearchBar";
import Loading from "../../Components/Loading/Loading";
import Heading from "../../Components/Heading/Heading";

function SearchScreen() {
  const sizeHook = useSize()

  return (
    <ScrapeContext.Consumer>
      {(state) => {
        return (
          <div ref={sizeHook.ref} className="search">
            <div className="searchNavContainer">
              <Navbar />
            </div>
          
            <div className="searchMain">

              <Search margin="0 0 2rem 0" onSubmitted={(val) => state.scrapeSearch(val)}/>

              <Results
                list={state?.searchResults}
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
  const navigate = useNavigate()

  const openSeries = (item) => {
    scrapeSeries(item.url)
    navigate("/series")
  }

  if (list) {
    return (
      <Heading
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
      </Heading>
    );
  } else {
    return <Loading></Loading>;
  }
}

export default SearchScreen;
