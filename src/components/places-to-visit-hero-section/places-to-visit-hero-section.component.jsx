import React from "react";
import { useNavigate } from "react-router-dom";
import './places-to-visit-hero-section.styles.css'
import Button from "../button/button.component";
import PlacesCarousel from "./places-carousel.component";

const PlacesToVisitHeroSection = ({ title, description, cta, bgImage, carouselItems }) => {
    const navigate = useNavigate();
    const handleCTAClick = () => {
        navigate('/make-plan');
    }
    return (
        <div className="places-to-visit-hero-section">
            <div className="places-to-visit-hero-content">
                <h1 className="places-to-visit-hero-title">{title}</h1>
                <p className="places-to-visit-hero-tagline">{description}</p>
                <Button buttonType={"default"} buttonValue={cta} onClick={handleCTAClick} />
            </div>
            <PlacesCarousel items={carouselItems} />
        </div>
    );
}

export default PlacesToVisitHeroSection;
