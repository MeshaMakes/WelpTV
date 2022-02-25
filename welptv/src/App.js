import "./Utils/Colors.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import UserContextProvider from "./Services/UserService"
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
    <UserContextProvider>
      <ScrapeContextProvider>
        <BrowserRouter>
          <ViewingCard />
          <Routes>

            <Route path="/auth" element={<AuthScreen/>}/>
            <Route path="/home" element={<HomeScreen/>}/>
            <Route path="/search" element={<SearchScreen/>}/>
            <Route path="/series" element={<SeriesScreen/>}/>
            <Route path="/watchlist" element={<WatchlistScreen/>}/>
            <Route path="/settings" element={<SettingsScreen/>}/>
            <Route path="*" element={<Navigate to="/home" />} />

          </Routes>
        </BrowserRouter>
      </ScrapeContextProvider>
    </UserContextProvider>
  )
}

export default App
