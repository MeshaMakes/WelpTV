import "./Utils/Colors.css";
import Navbar from "./Components/NavBar/NavBar";
import SeriesCard from"./Components/SeriesCard/SeriesCard";

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
