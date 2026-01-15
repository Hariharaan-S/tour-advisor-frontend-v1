import React from "react";
import "./top-cities.styles.css";
import CityCard from "../../../components/city-card/city-card.component";

const TopCities = () => {
    return (
        <div className="top-cities-container">
            <h2>Top Cities to Visit</h2>
            <div className="cities-wrapper">
                <CityCard cityName="Chennai" imageUrl="img/chennai.png" />
                <CityCard cityName="Madurai" imageUrl="img/madurai.jpg" />
                <CityCard cityName="Coimbatore" imageUrl="img/coimbatore.png" />

            </div>

        </div>
    );
}

export default TopCities;