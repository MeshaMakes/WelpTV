import React, { useState, useContext } from 'react'
import "./AuthScreen.css"
import ScrapeContext from "../../Utils/Contexts/ScrapeContext"
import useStorage from "../../Utils/Hooks/StorageHook"
import useSize from "../../Utils/Hooks/SizeHook"
import { useHistory } from "react-router-dom"
import Navbar from "./../../Components/NavBar/NavBar"
import SeriesCard from "./../../Components/SeriesCard/SeriesCard"
import Loading from "./../../Components/Loading/Loading"
import InfoCard from "./../../Components/InfoCard/InfoCard"
import Heading from "./../../Components/Heading/Heading"

function AuthScreen() {
  const context = useContext(ScrapeContext)
  const storageHook = useStorage()
  const sizeHook = useSize()
  const [list, setList] = useState([
    "https://i1.wp.com/anitrendz.net/news/wp-content/uploads/2022/02/Shikimoris-Not-Just-A-Cutie-Trailer-Screenshot.png?resize=700%2C476",
    "https://anitrendz.net/news/wp-content/uploads/no1/winter-2022-anime-season-top-anime-week-3.png",
    "https://cdn.vox-cdn.com/thumbor/Ik1FQeDSwnZiOZ8jjNRCGefuUjQ=/0x0:1280x670/920x613/filters:focal(538x233:742x437):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69026146/my_hero_academia_season_5_izuku_midoriya_deku_anime_1258627_1280x0.0.jpeg",
    "https://www.geekgirlauthority.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-01-at-12.09.15-PM-1280x640.jpg",
    "https://www.nme.com/wp-content/uploads/2021/06/chainsaw-man-anime-trailer-mappa-2021@2000x1270-696x442.jpg",
    "https://media.comicbook.com/2020/10/demon-slayer-popularity-anime-1242618.jpeg?auto=webp&width=1200&height=627&crop=1200:627,smart",
    "https://cdn.vox-cdn.com/thumbor/OltfK75Lq8HceKAKn_fdGbd9jcY=/0x0:1200x675/920x613/filters:focal(504x242:696x434):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68567666/Dr._STONE_Season_2_release_date_Episode_24_ending_with_Stone_Wars_Dr._STONE_manga_compared_to_the_anime_Spoilers.0.jpg",
    "https://netstorage-legit.akamaized.net/images/a3735658d21d2246.png?imwidth=720",
    "https://i1.wp.com/anitrendz.net/news/wp-content/uploads/2022/02/Shikimoris-Not-Just-A-Cutie-Trailer-Screenshot.png?resize=700%2C476",
    "https://anitrendz.net/news/wp-content/uploads/no1/winter-2022-anime-season-top-anime-week-3.png",
    "https://cdn.vox-cdn.com/thumbor/Ik1FQeDSwnZiOZ8jjNRCGefuUjQ=/0x0:1280x670/920x613/filters:focal(538x233:742x437):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69026146/my_hero_academia_season_5_izuku_midoriya_deku_anime_1258627_1280x0.0.jpeg",
    "https://www.geekgirlauthority.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-01-at-12.09.15-PM-1280x640.jpg",
    "https://www.nme.com/wp-content/uploads/2021/06/chainsaw-man-anime-trailer-mappa-2021@2000x1270-696x442.jpg",
    "https://media.comicbook.com/2020/10/demon-slayer-popularity-anime-1242618.jpeg?auto=webp&width=1200&height=627&crop=1200:627,smart",
    "https://cdn.vox-cdn.com/thumbor/OltfK75Lq8HceKAKn_fdGbd9jcY=/0x0:1200x675/920x613/filters:focal(504x242:696x434):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68567666/Dr._STONE_Season_2_release_date_Episode_24_ending_with_Stone_Wars_Dr._STONE_manga_compared_to_the_anime_Spoilers.0.jpg",
    "https://netstorage-legit.akamaized.net/images/a3735658d21d2246.png?imwidth=720",
    "https://i1.wp.com/anitrendz.net/news/wp-content/uploads/2022/02/Shikimoris-Not-Just-A-Cutie-Trailer-Screenshot.png?resize=700%2C476",
    "https://anitrendz.net/news/wp-content/uploads/no1/winter-2022-anime-season-top-anime-week-3.png",
    "https://cdn.vox-cdn.com/thumbor/Ik1FQeDSwnZiOZ8jjNRCGefuUjQ=/0x0:1280x670/920x613/filters:focal(538x233:742x437):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69026146/my_hero_academia_season_5_izuku_midoriya_deku_anime_1258627_1280x0.0.jpeg",
    "https://www.geekgirlauthority.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-01-at-12.09.15-PM-1280x640.jpg",
    "https://www.nme.com/wp-content/uploads/2021/06/chainsaw-man-anime-trailer-mappa-2021@2000x1270-696x442.jpg",
    "https://media.comicbook.com/2020/10/demon-slayer-popularity-anime-1242618.jpeg?auto=webp&width=1200&height=627&crop=1200:627,smart",
    "https://cdn.vox-cdn.com/thumbor/OltfK75Lq8HceKAKn_fdGbd9jcY=/0x0:1200x675/920x613/filters:focal(504x242:696x434):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68567666/Dr._STONE_Season_2_release_date_Episode_24_ending_with_Stone_Wars_Dr._STONE_manga_compared_to_the_anime_Spoilers.0.jpg",
    "https://netstorage-legit.akamaized.net/images/a3735658d21d2246.png?imwidth=720",
  ])

  return (
    <div ref={sizeHook.ref} className="auth">
      <div className="authBackground">
        {list.map((data) => (
          <img className="card" src={data} />
        ))}
      </div>

      <div className="authForeground">
        <InputContainer />
      </div>
    </div>
  )
}

function InputContainer(){
  return (
    <div className="inputContainer">
    </div>
  )
}

export default AuthScreen
