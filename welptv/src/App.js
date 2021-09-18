import "./Stylesheets/app.css";
import Navbar from "./Components/navbar";
import SeriesCard from"./Components/seriesCard";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="home">
        <SeriesCard></SeriesCard>
      </div>
      <div className="series"></div>
    </div>
  );
}

export default App;
