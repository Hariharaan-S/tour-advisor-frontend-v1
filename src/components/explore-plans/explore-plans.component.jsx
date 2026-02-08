import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./explore-plans.styles.css";

const explorePlans = [
    { name: "Thiruchirapalli", price: "Est. Rs. 2000", image: "img/trichy.png", id: 1 },
    { name: "Shivam Temple", price: "Est. Rs. 5000", image: "img/coimbatore.png", id: 2 },
    { name: "Marina Beach", price: "Est. Rs. 4000", image: "img/chennai.png", id: 3 },
    { name: "Madhurai", price: "Est. Rs. 3500", image: "img/madurai.jpg", id: 4 },
    { name: "Muttukadu", price: "Est. Rs. 2800", image: "img/landing-page-hero.png", id: 5 },
];

const ExplorePlans = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = 320;
        const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const container = scrollRef.current;
            if (!container) return;
            
            const cardWidth = 320;
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
            
            // Reset to the beginning if we reach the end
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                setTimeout(() => {
                    container.scrollLeft = 0;
                }, 1000);
            }
        }, 2000); // Auto-scroll every 2 seconds
        
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="explore-plans-section">
            <h2 className="explore-plans-title">EXPLORE PLANS</h2>
            <div className="explore-plans-wrapper">
                <button className="carousel-arrow carousel-arrow-left" onClick={() => scroll("left")} aria-label="Previous">
                    ‹
                </button>
                <div className="explore-plans-carousel" ref={scrollRef}>
                    {explorePlans.map((plan) => (
                        <div key={plan.id} className="explore-plan-card">
                            <div className="explore-plan-image">
                                <img src={plan.image} alt={plan.name} />
                            </div>
                            <div className="explore-plan-info">
                                <h3>{plan.name}</h3>
                                <p className="plan-price">{plan.price}</p>
                                <Link to="/make-plan" className="view-plan-btn">
                                    View Plan
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-arrow carousel-arrow-right" onClick={() => scroll("right")} aria-label="Next">
                    ›
                </button>
            </div>
        </section>
    );
};

export default ExplorePlans;
