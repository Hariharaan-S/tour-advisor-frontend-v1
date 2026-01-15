import React from "react";
import "./places-to-visit.styles.css"
import HeroSection from "../../components/hero-section/hero-section.component";
import FloatSection from "../../components/float-section/float-section.component";
import Footer from "../../components/footer/footer.component";
import PlacesList from "../../components/places-list/places-list.component";

const PlacesToVisit = () => {
    return (
        <div className="places-to-visit-section">
            <HeroSection title={"Discover Hidden Gems Across India"} description={"From timeless heritage sites to breathtaking landscapes, explore the must-visit destinations that make every journey unforgettable"} cta={"Start your plan"} bgImage={"img/places_to_visit.png"} isPresent={true} />
            <FloatSection floatSectionTitle={"Popular Cities to Explore"} floatSectionDescription={"Plan your next trip to India’s most loved cities."} />
            <PlacesList />
            <Footer />
        </div>
    )
}

export default PlacesToVisit;