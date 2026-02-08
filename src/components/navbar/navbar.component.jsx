import React, { useState, useEffect } from "react";
import './navbar.styles.css';
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <>
            <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="img/logo.png" alt="Tour Advisor Logo" className="navbar-logo-img" />
                        <span className="navbar-logo-text">Tour Advisor</span>
                    </Link>
                    
                    <nav className="navbar-nav">
                        <Link to="/">Home</Link>
                        <Link to="/places-to-visit">Visit Places</Link>
                        <Link to="/make-plan">Make Plan</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Contact Us</Link>
                    </nav>
                    
                    <Link to="/make-plan" className="navbar-cta">
                        Start Planning
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;
