import "./Utils/Colors.css"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import ScrapeContextProvider from "./Services/ScrapeService"
import AuthScreen from "./Screens/AuthScreen/AuthScreen"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import SearchScreen from "./Screens/SearchScreen/SearchScreen"
import WatchlistScreen from "./Screens/WatchlistScreen/WatchlistScreen"
import SettingsScreen from "./Screens/SettingsScreen/SettingsScreen"
import SeriesScreen from "./Screens/SeriesScreen/SeriesScreen"
import ViewingCard from "./Components/ViewingCard/ViewingCard"

function App() {
  return (
    <ScrapeContextProvider>
      <BrowserRouter>
        <ViewingCard />
        <Switch>
          <Route path="/auth"> <AuthScreen /> </Route>
          <Route path="/home"> <HomeScreen /> </Route>
          <Route path="/search"> <SearchScreen /> </Route>
          <Route path="/series"> <SeriesScreen /> </Route>
          <Route path="/watchlist"> <WatchlistScreen /> </Route>
          <Route path="/settings"> <SettingsScreen /> </Route>
          <Route path="/"> <Redirect to="/home" />  </Route>
        </Switch>
      </BrowserRouter>
    </ScrapeContextProvider>
  );
}

export default App;
