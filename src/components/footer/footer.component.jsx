import React from "react";
import "./footer.styles.css";
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-address-container">
                    <div className="footer-main-logo">
                        <img src="img/logo.png" alt="" />
                    </div>
                    <div className="address">
                        <p>Sample Address Line 1</p>
                        <p>Sample Address Line 2</p>
                        <p>City Name</p>
                        <p>State Name, <span>Pin Code: 000000</span></p>
                    </div>
                </div>


                <div className="footer-sitemap">
                    <ul className="footer-site-list">
                        <Link style={{ textDecoration: "none", color: "#FFF" }} to={'/'}><li className="footer-site-item">Home</li></Link>
                        <Link style={{ textDecoration: "none", color: "#FFF" }} to={'/places-to-visit'}><li className="footer-site-item">Visit Places</li></Link>
                        <Link style={{ textDecoration: "none", color: "#FFF" }} to={'/make-plan'}><li className="footer-site-item">Plan Trip</li></Link>
                        <Link style={{ textDecoration: "none", color: "#FFF" }} to={'/'}><li className="footer-site-item">About Us</li></Link>
                        <Link style={{ textDecoration: "none", color: "#FFF" }} to={'/'}><li className="footer-site-item">Contact Us</li></Link>
                    </ul>
                </div>


                <div className="footer-contact-container">
                    <div className="contact-wrapper">
                        <div className="phone">
                            <Logo imageName={"phone.png"} />
                            <p>+00 0000 0000</p>
                        </div>
                        <div className="email">
                            <Logo imageName={"mail.png"} />
                            <p>sample@sample.com</p>
                        </div>
                        <div className="media-container">
                            <Logo imageName={"twitter.png"} />
                            <Logo imageName={"facebook.png"} />
                            <Logo imageName={"instagram.png"} />
                            <Logo imageName={"youtube.png"} />
                        </div>
                    </div>
                </div>
            </div>

            <p style={{ fontSize: ".8rem", margin: "3rem auto 0 auto", paddingBottom: "1rem" }}>&copy; 2025 Tour Advisor. All rights reserved.</p>
        </div>
    );
}

export default Footer;