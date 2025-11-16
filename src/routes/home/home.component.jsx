import React from "react";
import HeroSection from "../../components/hero-section/hero-section.component";
import FloatSection from "../../components/float-section/float-section.component";
import TopCities from "./top-cities/top-cities.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <div>
            <HeroSection title="Travel Made Simple" description="Plan, organize, and enjoy trips without the hassle." cta="Start your plan" bgImage="img/landing-page-hero.png" />
            <FloatSection floatSectionTitle={"Make Your Perfect Plan"} floatSectionDescription={"From routes to stays — everything in one place."} />
            <TopCities />
            <Footer />
        </div>
    );
}


export default Home;