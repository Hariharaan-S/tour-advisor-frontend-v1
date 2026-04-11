import React, { useContext, useState, useEffect, useRef } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import PopupMenu from "../popup-menu/popup-menu.component";
import profileIcon from "../../assets/img/profile-icon.jpg";
import Logo from "../../assets/img/logo.png";
import "./navbar.styles.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useContext(UserContext);
  const profileRef = useRef(null);
  const popupRef = useRef(null);

  const navigationMappings = {
    'Design Plan' : '/make-plan',
    'Home' : '/',
    'Visit Places': '/places-to-visit',
    'About Us': '#',
    'Contact Us': '#'
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handlePopupToggle = () => {
    setIsPopupOpen((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const navLinks = ["Home", "Visit Places", "Design Plan", "About Us", "Contact Us"];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "#fff" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={Logo} alt="Logo" style={{ width: 40, height: 40, borderRadius: "50%" }} />
        </div>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: scrolled ? "#1e293b" : "#fff",
            letterSpacing: "-0.5px",
          }}
        >
          Tour Advisor
        </span>
      </div>

      {/* Nav Links */}
      <ul
        style={{
          display: "flex",
          gap: 32,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link, i) => {
          const targetPath = navigationMappings[link] || "/";
          const isActive = location.pathname === targetPath;

          return (
            <li key={i}>
              <Link
                to={targetPath}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 400,
                  color: scrolled ? "#334155" : "#fff",
                  textDecoration: "none",
                  opacity: isActive ? 1 : 0.85,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = isActive ? 1 : 0.85)}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      {isLoggedIn ? (
        <>
          <div
            ref={profileRef}
            style={{ cursor: "pointer", marginLeft: 8 }}
            onClick={handlePopupToggle}
          >
            <img
              src={profileIcon}
              alt="Profile"
              style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Logout
              </a>
            </div>
          </PopupMenu>
        </>
      ) : (
        <Link
          to="/login"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: scrolled ? "#334155" : "#fff",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      )}
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
