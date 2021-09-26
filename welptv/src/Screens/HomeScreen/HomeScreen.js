import "./HomeScreen.css";
import Navbar from "./../../Components/NavBar/NavBar";
import SeriesCard from "./../../Components/SeriesCard/SeriesCard";
//import Loading from "./../../Components/Loading/Loading";
import InfoCard from "./../../Components/InfoCard/InfoCard";
import Heading from "./../../Components/Heading/Heading";

function HomeScreen() {
  const data = {
    title: "Jujustsu Kaisen",
    season: "fall 2020 season",
    color: "#0084ff30",
    image:
      "https://i.pinimg.com/originals/ed/00/4b/ed004b904fad8a61094f993eab787e05.jpg",
  };

  const message = {
    title: "Welcome to WelpTV",
    body: "WelpTV is an Anitguan-made project by anime watchers, for anime watchers! No ads! No Popups! No distractions! This is the gift WelpTV offers you, and let's make it the gift that keeps on giving by sharing it with others around the island. WelpTV can and will become the home of all anime enthusiasts in Antigua!!",
  };

  return (
    <div className="home">
      <div className="homeNavContainer">
        <Navbar />
      </div>

      <div className="homeMain">
        <InfoCard title={message.title} desc={message.body} />

        <Heading title="Recently Updated" margin="0rem 0rem 3rem 0rem" padding="0">
          <div className="homeSeriesGrid">
            <SeriesCard type="poster" data={data}></SeriesCard>
            <SeriesCard type="poster" data={data}></SeriesCard>
            <SeriesCard type="poster" data={data}></SeriesCard>
            <SeriesCard type="poster" data={data}></SeriesCard>
            <SeriesCard type="poster" data={data}></SeriesCard>
            <SeriesCard type="poster" data={data}></SeriesCard>
            <SeriesCard type="poster" data={data}></SeriesCard>
            <SeriesCard type="poster" data={data}></SeriesCard>
          </div>
        </Heading>

        <Heading title="Top Picks by the Developers of Welptv" margin="0rem 0rem 3rem 0rem" padding="0">
          <div className="topPicksContainer">
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
          </div>
        </Heading>

        <Heading title="Recently Viewed" margin="0rem 0rem 3rem 0rem" padding="0">
          <div className="historyGrid">
            <SeriesCard type="ticket" data={data}></SeriesCard>
            <SeriesCard type="ticket" data={data}></SeriesCard>
            <SeriesCard type="ticket" data={data}></SeriesCard>
            <SeriesCard type="ticket" data={data}></SeriesCard>
            <SeriesCard type="ticket" data={data}></SeriesCard>
          </div>
        </Heading>

        <InfoCard title={message.title} desc={message.body} />
      </div>
    </div>
  );
}

export default HomeScreen;
