import React from "react";
import "./float-section.styles.css";
import DestinationCard from "../destination-card/destination-card.component";

const FloatSection = ({ floatSectionTitle, floatSectionDescription }) => {
    return (
        <div className="float-section">
            <div className="section-header">
                <h2>{floatSectionTitle}</h2>
                <p>{floatSectionDescription}</p>
            </div>
            <div className="chevron-btn">
                <span className="chevron"><img src="img/chevron-left-solid-full.png" alt="" srcset="" /></span>
                <span className="chevron"><img src="img/chevron-right-solid-full.png" alt="" srcset="" /></span>
            </div>
            <div className="destination-cards-container">
                <div className="destination-cards-wrapper">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
            </div>
        </div>
    );
}

export default FloatSection;