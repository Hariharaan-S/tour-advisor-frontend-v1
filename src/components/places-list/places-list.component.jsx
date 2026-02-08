import React from "react";
import { Link } from "react-router-dom";
import "./places-list.styles.css";

const places = [
    { name: "Chennai", image: "img/chennai.png", id: 1 },
    { name: "Trichy", image: "img/trichy.png", id: 2 },
    { name: "Coimbatore", image: "img/coimbatore.png", id: 3 },
    { name: "Madurai", image: "img/madurai.jpg", id: 4 },
];

const PlacesList = () => {
    return (
        <section className="places-list-section">
            <h2 className="places-list-title">MORE PLACES TO VISIT</h2>
            <div className="places-list-grid">
                {places.map((place) => (
                    <Link to="/places-to-visit" key={place.id} className="place-card">
                        <div className="place-image">
                            <img src={place.image} alt={place.name} />
                            <div className="place-overlay"></div>
                        </div>
                        <h3 className="place-name">{place.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PlacesList;
