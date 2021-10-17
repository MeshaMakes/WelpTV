import "./HomeScreen.css";
import ScrapeContext from "../../Services/ScrapeContext";
import useStorage from "../../Services/StorageHook";
import { useHistory } from "react-router-dom";
import Navbar from "./../../Components/NavBar/NavBar";
import SeriesCard from "./../../Components/SeriesCard/SeriesCard";
import Loading from "./../../Components/Loading/Loading";
import InfoCard from "./../../Components/InfoCard/InfoCard";
import Heading from "./../../Components/Heading/Heading";

function HomeScreen() {
  const storageHook = useStorage();

  const message = {
    title: "Welcome to WelpTV",
    body: "WelpTV is an Anitguan-made project by anime watchers, for anime watchers! No ads! No Popups! No distractions! This is the gift WelpTV offers you, and let's make it the gift that keeps on giving by sharing it with others around the island. WelpTV can and will become the home of all anime enthusiasts in Antigua!!",
  };

  return (
    <ScrapeContext.Consumer>
      {(state) => {
        return (
          <div className="home">
            <div className="homeNavContainer">
              <Navbar />
            </div>

            <div className="homeMain">
              <Recently
                list={storageHook.getRecents()}
                scrapeSeries={state.scrapeSeries}
              />
              
              <InfoCard
                title={message.title}
                desc={message.body}
                btnText={""}
                margin="0rem 0rem 1rem 0rem"
                onClick={() => {}}
              />

              <Latest
                list={state.values?.latest}
                scrapeSeries={state.scrapeSeries}
              />

              <Heading
                title="Top Picks by the Developers of Welptv"
                margin="0rem 0rem 3rem 0rem"
                padding="0"
              >
                <div className="topPicksContainer">
                  <SeriesCard
                    type="thumbnail"
                    data={storageHook.data}
                  ></SeriesCard>
                </div>
              </Heading>

              <InfoCard
                title={message.title}
                desc={message.body}
                btnText={""}
                onClick={() => {}}
              />
            </div>
          </div>
        );
      }}
    </ScrapeContext.Consumer>
  );
}

function Latest({ list, scrapeSeries }) {
  let history = useHistory();
  const openSeries = (item) => {
    let url = "https://www.animekisa.cc/anime/" + fix(item.name).toLowerCase();
    scrapeSeries(url);
    history.push("/series");
  };

  if (list) {
    return (
      <Heading
        title="Recently Updated"
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

function Recently({ list, scrapeSeries }) {
  let history = useHistory();
  const openSeries = (item) => {
    let url = "https://www.animekisa.cc/anime/" + fix(item.name).toLowerCase();
    scrapeSeries(url);
    history.push("/series");
  };

  if (list) {
    if (list.length === 0) {
      return <div></div>;
    }
    return (
      <Heading title="Recently Viewed" margin="0rem 0rem 3rem 0rem" padding="0">
        <div className="historyGrid">
          {list?.map(function (item) {
            return (
              <SeriesCard
                key={item.url}
                type="ticket"
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

function fix(data) {
  const specials = [
    "☆",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    " - ",
    " -",
    "- ",
    "+",
    "=",
    "[",
    "]",
    "{",
    "}",
    '"',
    ":",
    ";",
    ",",
    ".",
    "/",
    "?",
    ">",
    "<",
    "'",
    "|",
  ];
  let source = data.toString();
  for (let i = 0; i < specials.length; i++) {
    source = source.replaceAll(specials[i], "");
  }
  source = source.replaceAll(" ", "-");
  return source;
}

export default HomeScreen;
