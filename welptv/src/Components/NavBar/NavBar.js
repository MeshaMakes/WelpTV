import React from 'react';
import "./NavBar.css";
import {ReactComponent as Logo} from "../../logo.svg";
import {ReactComponent as Home} from '../../Icons/home.svg';
import {ReactComponent as Search} from '../../Icons/search.svg';
import {ReactComponent as Live} from '../../Icons/live.svg';
import {ReactComponent as Watchlist} from '../../Icons/bookmarks.svg';
import {ReactComponent as Settings} from '../../Icons/settings.svg';

var navItems = [
    {
        name: "Home",
        path: "/home",
        icon: <Home/>,
    },
    {
        name: "Search",
        path: "/search",
        icon: <Search/>,
    },
    {
        name: "Live",
        path: "/live",
        icon: <Live/>,
    },
    {
        name: "Watchlist",
        path: "/watchlist",
        icon: <Watchlist/>,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: <Settings/>,
    },
];

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="https://www.amazon.com/">
                    <Logo/>
                </a>
            </div>

            {navItems.map(function(val){
                return <div key={val.name} className="nav-item">
                    <a href="https://www.amazon.com/">
                        {val.icon}
                    </a>
                </div>;
            })}
        </div>
    );
}

export default Navbar;
