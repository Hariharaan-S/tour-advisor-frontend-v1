import React from "react";
import "./footer.styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img src="img/logo.png" alt="Tour Advisor Logo" className="logo-img" />
                        <span className="logo-name">Tour Advisor</span>
                    </Link>
                    <p className="footer-address">
                        1237 Mepobahones, <br></br> Moshohones, <br></br> NY 12255
                    </p>
                </div>

                <div className="footer-sitemap">
                    <h4 className="footer-heading">SITEMAP</h4>
                    <ul className="footer-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/make-plan">Make Plan</Link></li>
                        <li><Link to="/places-to-visit">visit Places</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-heading">CONTACT</h4>
                    <ul className="footer-list">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-info">
                    <a href="mailto:email@roamdtl.com" className="footer-email">email@roamdtl.com</a>
                    <a href="tel:5824321253" className="footer-phone">582-432 1253</a>
                    <div className="footer-social">
                        <a href="#" className="social-icon" aria-label="Facebook">f</a>
                        <a href="#" className="social-icon" aria-label="Twitter">𝕏</a>
                        <a href="mailto:email@roamdtl.com" className="social-icon" aria-label="Email">✉</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
