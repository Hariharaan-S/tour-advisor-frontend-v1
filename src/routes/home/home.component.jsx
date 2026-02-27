import React from "react";
import HeroSection from "../../components/hero-section/hero-section.component";
import ExplorePlans from "../../components/explore-plans/explore-plans.component";
import MorePlaces from "../../components/more-places/more-places.component";
import CTASection from "../../components/cta-section/cta-section.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <div>
            <HeroSection
                title="Travel Made Simple"
                description="Plan, organize, and enjoy trips without the hassle."
                cta="Start Your Plan"
            />
            <ExplorePlans />
            <MorePlaces />
            <CTASection />
            <Footer />
        </div>
    );
};

export default Home;
