import React, { useContext, useState, useEffect, useRef } from "react";
import './navbar.styles.css';
import { Outlet } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import PopupMenu from "../popup-menu/popup-menu.component";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { isLoggedIn, logout } = useContext(UserContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const navigate = useNavigate();
    const profileRef = useRef(null);
    const popupRef = useRef(null);

    const handleLogout = () => {
      logout();
      navigate("/login");
    };

    const handlePopupToggle = () => {
        setIsPopupOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!isPopupOpen) return;
            if (profileRef.current?.contains(event.target)) return;
            if (popupRef.current?.contains(event.target)) return;
            setIsPopupOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isPopupOpen]);

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
                    {isLoggedIn ? (
                        <>
                            <div ref={profileRef} className="navbar-profile" onClick={handlePopupToggle}>
                                <img src="img/profile-icon.jpg" alt="Profile" className="navbar-profile-img" />
                            </div>
                            <PopupMenu ref={popupRef} isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                                <div className="popup-menu-item">
                                    <Link to="/profile">Profile</Link>
                                </div>
                                <div className="popup-menu-item">
                                    <Link to="/settings">Settings</Link>
                                </div>
                                <div className="popup-menu-item">
                                    <Link to="/view-plans">My Plans</Link>
                                </div>
                                <div className="popup-menu-item">
                                    <Link to="#" onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </div>
                            </PopupMenu>

                        </>
                    ) : (
                        <Link to="/login" className="navbar-login">
                            Login
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;
