import "./Utils/Colors.css";
import Navbar from "./Components/NavBar/NavBar";
import SeriesCard from"./Components/SeriesCard/SeriesCard";

function App() {

  var data = {
    title: "Jujustsu Kaisen",
    season: "fall 2020",
    color: "#0084ff30",
    image: "https://i.pinimg.com/originals/ed/00/4b/ed004b904fad8a61094f993eab787e05.jpg",
  };


  return (
    <div className="App">
      <Navbar/>

      <div className="home">

        <div style={{display: "flex", alignItems: "center"}}>
          <SeriesCard type="thumbnail" data={data}></SeriesCard>
          <SeriesCard type="poster" data={data}></SeriesCard>
          <SeriesCard type="ticket" data={data}></SeriesCard>
        </div>

      </div>
      
      <div className="series"></div>
    </div>
  );
}

export default App;
