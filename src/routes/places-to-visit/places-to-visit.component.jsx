import React from "react";
import "./places-to-visit.styles.css";
import PlacesToVisitHeroSection from "../../components/places-to-visit-hero-section/places-to-visit-hero-section.component";
import ExplorePlans from "../../components/explore-plans/explore-plans.component";
import MorePlaces from "../../components/more-places/more-places.component";
import Footer from "../../components/footer/footer.component";

const PlacesToVisit = () => {
    return (
        <div className="places-to-visit-section">
            <PlacesToVisitHeroSection
                title="Discover Hidden Gems"
                description="From timeless heritage sites to breathtaking landscapes, explore the must-visit destinations that make every journey unforgettable"
                cta="Start Planning"
                bgImage="img/places_to_visit.png"
            />
            <ExplorePlans />
            <MorePlaces />
            <Footer />
        </div>
    );
};

export default PlacesToVisit;
