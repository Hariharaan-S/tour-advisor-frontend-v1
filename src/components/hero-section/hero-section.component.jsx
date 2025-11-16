import React from "react";
import './hero-section.styles.css'
import Button from "../button/button.component";

const HeroSection = ({ title, description, cta, bgImage }) => {
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
                        <Button buttonType="default" buttonValue={cta} />
                    </div>
                </div>

            </div>
        </>

    );
}

export default HeroSection;