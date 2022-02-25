import React from "react";
import "./NavBar.css";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";
import { ReactComponent as Home } from "../../Icons/home.svg";
import { ReactComponent as Search } from "../../Icons/search.svg";
import { ReactComponent as Live } from "../../Icons/live.svg";
import { ReactComponent as Watchlist } from "../../Icons/bookmarks.svg";
import { ReactComponent as Settings } from "../../Icons/settings.svg";

const navItems = [
  {
    name: "Home",
    path: "/home",
    icon: <Home />,
  },
  {
    name: "Search",
    path: "/search",
    icon: <Search />,
  },
  {
    name: "Live",
    path: "/live",
    icon: <Live />,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <Watchlist />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings />,
  },
]

const Navbar = () => {
  const location = useLocation()

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/home">
          <Logo />
        </a>
      </div>

      {navItems.map(function (val) {
        return (
          <NavLink
            key={val.name}
            className={`nav-item ${location.pathname === val.path ? "is-active" : "" }`}
            to={val.path}
          >
            {val.icon}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
