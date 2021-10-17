import "./Utils/Colors.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import SearchScreen from "./Screens/SearchScreen/SearchScreen";
import SeriesScreen from "./Screens/SeriesScreen/SeriesScreen";
import SettingsScreen from "./Screens/SettingsScreen/SettingsScreen";
import ScrapeContextProvider from "./Services/ScrapeService";
import ViewingCard from "./Components/ViewingCard/ViewingCard";

function App() {
  return (
    <ScrapeContextProvider>
      
      <ViewingCard />

      <BrowserRouter>
        <Switch>
          <Route path="/home"> <HomeScreen /> </Route>
          <Route path="/search"> <SearchScreen /> </Route>
          <Route path="/series"> <SeriesScreen /> </Route>
          <Route path="/settings"> <SettingsScreen /> </Route>
          <Route path="/"> <Redirect to="/home" />  </Route>
        </Switch>
      </BrowserRouter>
    </ScrapeContextProvider>
  );
}

export default App;
