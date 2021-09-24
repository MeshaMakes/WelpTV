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
      <div className="navContainer">
        <Navbar />
      </div>

      <div className="main">
        <Heading title="Top Picks by the Developers of Welptv" padding="0">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              padding: "1.5rem 2rem",
              overflow: "auto",
            }}
          >
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
          </div>
        </Heading>

        <SeriesCard type="poster" data={data}></SeriesCard>
        <SeriesCard type="ticket" data={data}></SeriesCard>
        <InfoCard title={message.title} desc={message.body} />
        <InfoCard title={message.title} desc={message.body} />
      </div>
    </div>
  );
}

export default HomeScreen;
