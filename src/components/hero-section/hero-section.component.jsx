import React from "react";
import { useNavigate } from "react-router-dom";
import './hero-section.styles.css'
import Button from "../button/button.component";

const HeroSection = ({ title, description, cta, bgImage }) => {
    const navigate = useNavigate();
    const handleCTAClick = () => {
        navigate('/make-plan');
    }
    return (
        <div className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-tagline">{description}</p>
                <Button buttonType={"default"} buttonValue={cta} onClick={handleCTAClick} />
            </div>
        </div>
    );
}

export default HeroSection;
