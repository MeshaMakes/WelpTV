import React from 'react';
import "./NavBar.css";
import logo from "../../logo.svg";
import verified from '../../Icons/verified.svg';
import maps from '../../Icons/maps.svg';
import pet from '../../Icons/pet.svg';
import send from '../../Icons/send.svg';
import fingerprint from '../../Icons/fingerprint.svg';

var navItems = [
    {
        name: "Home",
        path: "/home",
        icon: verified
    },
    {
        name: "Search",
        path: "/search",
        icon: maps
    },
    {
        name: "Live",
        path: "/live",
        icon: pet
    },
    {
        name: "Watchlist",
        path: "/watchlist",
        icon: send
    },
    {
        name: "Settings",
        path: "/settings",
        icon: fingerprint
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
