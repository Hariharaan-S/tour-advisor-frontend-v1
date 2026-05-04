import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PopupMenu from "../popup-menu/popup-menu.component";
import profileIcon from "../../assets/img/profile-icon.jpg";
import Logo from "../../assets/img/logo.png";
import "./navbar.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/user/user.selector";
import { setLanguage } from "../../store/language/language.actions";
import { selectLanguage } from "../../store/language/language.selector";
import { logout } from "../../utils/user.utils";

const Navbar = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const language = useSelector(selectLanguage);
  console.log("Navbar - isLoggedIn:", isLoggedIn);
  const profileRef = useRef(null);
  const popupRef = useRef(null);

  const { t } = useTranslation();

  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "Visit Places", path: "/places-to-visit" },
    { label: "Design Plan", path: "/make-plan" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
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

  const isSolidNavbar = scrolled || location.pathname === "/about" || location.pathname === "/contact" || location.pathname === "/view-plans";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isSolidNavbar ? "#fff" : "transparent",
          boxShadow: isSolidNavbar ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
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
            color: isSolidNavbar ? "#1e293b" : "#fff",
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
        {navigationLinks.map((navLink, i) => {
          const isActive = location.pathname === navLink.path;

          return (
            <li key={i}>
              <Link
                to={navLink.path}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 400,
                  color: isSolidNavbar ? "#334155" : "#fff",
                  textDecoration: "none",
                  opacity: isActive ? 1 : 0.85,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = isActive ? 1 : 0.85)}
              >
                {t(navLink.label)}
              </Link>
            </li>
          );
        })}
      </ul>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <label
          htmlFor="navbar-language"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: isSolidNavbar ? "#334155" : "#fff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {t("Language")}
        </label>
        <select
          id="navbar-language"
          value={language}
          onChange={handleLanguageChange}
          style={{
            borderRadius: 14,
            border: "1px solid rgba(148, 163, 184, 0.4)",
            padding: "10px 12px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13,
            background: "#fff",
            color: "#0f172a",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
        </select>
      </div>
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
              <Link to="/profile">{t("Profile")}</Link>
            </div>
            <div className="popup-menu-item">
              <Link to="/settings">{t("Settings")}</Link>
            </div>
            <div className="popup-menu-item">
              <Link to="/view-plans">{t("My Plans")}</Link>
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
                {t("Logout")}
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
            color: isSolidNavbar ? "#334155" : "#fff",
            textDecoration: "none",
          }}
        >
          {t("Login")}
        </Link>
      )}
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
