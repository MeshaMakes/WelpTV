import "./Utils/Colors.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import SearchScreen from "./Screens/SearchScreen/SearchScreen";
import ScrapeContextProvider from "./Services/ScrapeService";

function App() {
  return <ScrapeContextProvider>
    <BrowserRouter>
        <Switch>
          <Route path="/search"> <SearchScreen /> </Route>
          <Route path="/"> <HomeScreen /> </Route>
        </Switch>
      </BrowserRouter>
  </ScrapeContextProvider>;
}

export default App;
