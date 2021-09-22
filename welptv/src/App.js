import "./Utils/Colors.css";
import Navbar from "./Components/NavBar/NavBar";
import SeriesCard from"./Components/SeriesCard/SeriesCard";
import Loading from"./Components/Loading/Loading";
import InfoCard from"./Components/InfoCard/InfoCard";
import SearchBar from "./Components/SearchBar/SearchBar";
import ScrapeContextProvider from "./Services/ScrapeService";

function App() {

  var data = {
    title: "Jujustsu Kaisen",
    season: "fall 2020",
    color: "#0084ff30",
    image: "https://i.pinimg.com/originals/ed/00/4b/ed004b904fad8a61094f993eab787e05.jpg",
  };


  return (
    <ScrapeContextProvider>
      <div className="App">
        <Navbar/>

        <div className="home">

          <div style={{display: "flex", alignItems: "center"}}>
            <SeriesCard type="thumbnail" data={data}></SeriesCard>
            <SeriesCard type="poster" data={data}></SeriesCard>
            <SeriesCard type="ticket" data={data}></SeriesCard>
          </div>

          <Loading/>
          <InfoCard title = "Welcome to WelpTV" desc="WelpTV is an Anitguan-made project by anime watchers, for anime watchers! No ads! No Popups! No distractions! This is the gift WelpTV offers you, and let's make it the gift that keeps on giving by sharing it with others around the island. 
          WelpTV can and will become the home of all anime enthusiasts in Antigua!!"  />
        
          <SearchBar/>
        </div>
        
        <div className="series"></div>
      </div>
  
    </ScrapeContextProvider>

  );
}

export default App;
