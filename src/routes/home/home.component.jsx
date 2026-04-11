import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import LeadersSection from "../../components/leaders-section/leaders-section.component";
import ExplorePlans from "../../components/explore-plans/explore-plans.component";
import ItinerarySection from "../../components/itinerary-section/itinerary-section.component";
import VideoTourSection from "../../components/video-tour-section/video-tour-section.component";
import MorePlaces from "../../components/more-places/more-places.component";
import GetInspiredSection from "../../components/get-inspired-section/get-inspired-section.component";
import CTASection from "../../components/cta-section/cta-section.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <Navbar />
            <HeroSection
                title="Travel Planning, Powered by AI"
                description="Tell us where you want to go and for how long. Our AI builds a complete, optimized travel plan with places to visit, nearby attractions, and smart recommendations—no manual research needed."
                cta="Starting Tour"
            />
            <LeadersSection />
            <ExplorePlans />
            <ItinerarySection />
            <VideoTourSection />
            <MorePlaces />
            <GetInspiredSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default Home;
