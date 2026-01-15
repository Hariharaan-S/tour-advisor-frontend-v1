import React from "react";
import './hero-section.styles.css'
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ title, description, cta, bgImage, isPresent }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="overlay"></div>
            <div className="landing-page-hero-section" style={{
                backgroundImage: `url(${bgImage})`
            }}>
                <div className="landing-page-hero">
                    <div className="hero-description">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="cto-button">
                        {isPresent && <Button buttonType="default" buttonValue={cta} onClick={() => navigate('/make-plan')} />}
                    </div>
                </div>

            </div>
        </>

    );
}

export default HeroSection;