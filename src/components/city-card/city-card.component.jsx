import React from "react";
import "./city-card.styles.css";

const CityCard = ({ cityName, imageUrl }) => {
    return (
        <div className="city-image">
            <div className="city-overlay"></div>
            <img src={imageUrl} alt={cityName} />
            <h3>{cityName}</h3>
        </div>
    );
}

export default CityCard;