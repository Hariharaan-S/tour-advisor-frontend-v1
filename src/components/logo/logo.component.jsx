import React from "react";
import "./logo.styles.css";

const Logo = ({ imageName, customStyles }) => {
    return (
        <div className="footer-logo">
            <img style={{ customStyles }} src={`img/${imageName}`} alt="Logo" />
        </div>
    );
}

export default Logo;