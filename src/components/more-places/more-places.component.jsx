import React from "react";
import { Link } from "react-router-dom";
import "./more-places.styles.css";

const places = [
    { name: "Thiruchirapalli", image: "img/trichy.png", id: 1 },
    { name: "Shivam Temple", image: "img/coimbatore.png", id: 2 },
    { name: "Chennai", image: "img/chennai.png", id: 3 },
    { name: "Madurai", image: "img/madurai.jpg", id: 4 },
    { name: "Muttukadu", image: "img/landing-page-hero.png", id: 5 },
    { name: "More+", image: "img/places_to_visit.png", id: 6 },
];

const MorePlaces = () => {
    return (
        <section className="more-places-section">
            <h2 className="more-places-title">MORE PLACES TO VISIT</h2>
            <div className="more-places-grid">
                {places.map((place) => (
                    <Link to="/places-to-visit" key={place.id} className="more-place-card">
                        <div className="more-place-image">
                            <img src={place.image} alt={place.name} />
                            <div className="more-place-overlay"></div>
                        </div>
                        <h3 className="more-place-name">{place.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default MorePlaces;
