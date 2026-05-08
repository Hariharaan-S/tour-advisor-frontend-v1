import React from "react";
import { useNavigate } from "react-router-dom";
import './places-to-visit-hero-section.styles.css'
import Button from "../button/button.component";
import PlacesCarousel from "./places-carousel.component";
import { useTranslation } from "react-i18next";

const PlacesToVisitHeroSection = ({ title, description, cta, bgImage, carouselItems }) => {
    const navigate = useNavigate();
    const handleCTAClick = () => {
        navigate('/make-plan');
    }

    const {t} = useTranslation();

    return (
        <div className="places-to-visit-hero-section" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="places-to-visit-hero-content">
                <h1 className="places-to-visit-hero-title">{t("places to visit title")}</h1>
                <p className="places-to-visit-hero-tagline">{t("places to visit description")}</p>
                <Button buttonType={"default"} buttonValue={t("places to visit cta")} onClick={handleCTAClick} />
            </div>
            <PlacesCarousel items={carouselItems} />
        </div>
    );
}

export default PlacesToVisitHeroSection;
