import "./SearchScreen.css";
import ScrapeContext from "../../Services/ScrapeContext";
import { useHistory } from "react-router-dom";
import Navbar from "./../../Components/NavBar/NavBar";
import SeriesCard from "./../../Components/SeriesCard/SeriesCard";
import Search from "../../Components/SearchBar/SearchBar";
import Loading from "./../../Components/Loading/Loading";
import Heading from "./../../Components/Heading/Heading";


function SearchScreen() {
  return (
    <ScrapeContext.Consumer>
      {(state) => {
        return (
          <div className="search">
            <div className="searchNavContainer">
              <Navbar />
            </div>
          
            <div className="searchMain">

              <Search onSubmitted={(val) => state.scrapeSearch(val)}/>

              <Results
                list={state.values?.searchResults}
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
        title={list.length + " Results"}
        margin="0rem 0rem 3rem 0rem"
        padding="0"
      >
        <div className="homeSeriesGrid">
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

export default SearchScreen;
