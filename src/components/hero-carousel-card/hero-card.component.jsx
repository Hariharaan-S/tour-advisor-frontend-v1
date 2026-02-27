import React from "react";
import './hero-card.styles.css'

const CarouselCard = ({ image, title }) => {
    return (
        <div className="carousel-card">
            <img src={image} alt={title} className="carousel-image" />
            <h3 className="carousel-title">{title}</h3>
        </div>
    );
}

export default CarouselCard;