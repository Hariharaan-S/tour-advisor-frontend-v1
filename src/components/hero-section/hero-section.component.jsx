import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './hero-section.styles.css'
import Button from "../button/button.component";
import HeroCarousel from "../hero-carousel/hero-carousel.component";

const HeroSection = ({ title, description, cta, bgImage }) => {
    const navigate = useNavigate();
    const {slug} = useParams();
    const handleCTAClick = () => {
        navigate('/make-plan');
    }
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-tagline">{description}</p>
                <Button buttonType={"default"} buttonValue={cta} onClick={handleCTAClick} />
            </div>
            {
                !slug && <HeroCarousel/>
            }
        </div>
    );
}

export default HeroSection;
