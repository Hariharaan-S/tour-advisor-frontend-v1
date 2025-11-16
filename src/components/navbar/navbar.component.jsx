import React from "react";
import './navbar.styles.css';
import SearchBar from "../search-bar/search-bar.component";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="img/logo.png" alt="" srcset="" />
            </div>
            <SearchBar />
            <ul>
                <li>Home</li>
                <li>Visit Places</li>
                <li>Plan Trip</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className="user-profile">
                <img src="img/user.png" alt="" />
            </div>

        </div>
    );
}

export default Navbar;