import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import FloatSection from "../../components/float-section/float-section.component";
import TopCities from "./top-cities/top-cities.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FloatSection />
            <TopCities />
            <Footer />
        </div>
    );
}


export default Home;