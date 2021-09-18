import "./Stylesheets/app.css";
//import Navbar from"./Components/navbar";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="home"></div>
      <div className="series"></div>
    </div>
  );
}

export default App;
