import React from 'react';
import "./NavBar.css";
import logo from "../../logo.svg";
import home from '../../Icons/home.svg';
import search from '../../Icons/search.svg';
import live from '../../Icons/live.svg';
import watchlist from '../../Icons/bookmarks.svg';
import settings from '../../Icons/settings.svg';

var navItems = [
    {
        name: "Home",
        path: "/home",
        icon: home,
    },
    {
        name: "Search",
        path: "/search",
        icon: search,
    },
    {
        name: "Live",
        path: "/live",
        icon: live,
    },
    {
        name: "Watchlist",
        path: "/watchlist",
        icon: watchlist,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: settings,
    },
];

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-nav">
                
                <li className="logo">
                    <a href="https://www.amazon.com/" className="nav-link">
                    <img src={logo} alt="logo" />
                    </a>
                </li>

                {navItems.map(function(val){
                    return <li className="nav-item">
                        <a href="https://www.amazon.com/" className="nav-link">
                            <img src={val.icon} alt="verified" />
                        </a>
                    </li>;
                })}
            </ul>
        </div>
    );
}

export default Navbar;
