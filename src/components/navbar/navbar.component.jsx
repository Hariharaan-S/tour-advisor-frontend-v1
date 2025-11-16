import React from "react";
import { useState, useEffect } from "react";
import './navbar.styles.css';
import SearchBar from "../search-bar/search-bar.component";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className="logo">
                    <img src="img/logo.png" alt="" srcset="" />
                </div>
                <SearchBar />
                <ul>
                    <Link style={{ textDecoration: "none" }} to={'/'}><li>Home</li></Link>
                    <Link style={{ textDecoration: "none" }} to={'/places-to-visit'}><li>Visit Places</li></Link>
                    <Link style={{ textDecoration: "none" }} to={'/make-plan'}><li>Plan Trip</li></Link>
                    <Link style={{ textDecoration: "none" }} to={'/'}><li>About Us</li></Link>
                    <Link style={{ textDecoration: "none" }} to={'/'}><li>Contact Us</li></Link>
                </ul>
                <div className="user-profile">
                    <img src="img/user.png" alt="" />
                </div>
            </div>
            <Outlet />
        </>

    );
}

export default Navbar;