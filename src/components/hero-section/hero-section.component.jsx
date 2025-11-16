import React from "react";
import './hero-section.styles.css'
import Button from "../button/button.component";

const HeroSection = () => {
    return (
        <>
            <div className="overlay"></div>
            <div className="landing-page-hero-section">
                <div className="landing-page-hero">
                    <div className="hero-description">
                        <h1>Travel Made Simple</h1>
                        <p>Plan, organize, and enjoy trips without the hassle.</p>
                    </div>
                    <div className="cto-button">
                        <Button buttonType="default" buttonValue='Start your plan' />
                    </div>
                </div>

            </div>
        </>

    );
}

export default HeroSection;