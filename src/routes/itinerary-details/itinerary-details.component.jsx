import React from "react";
import './itinerary-details.styles.css';
import HeroSection from "../../components/hero-section/hero-section.component";
import PlacesList from "../../components/places-list/places-list.component";
import Footer from "../../components/footer/footer.component";

const ItineraryDetails = () => {
    return (
        <div>
            <HeroSection
                title={"Your Perfect Getaway Awaits"}
                description={"Chennai City Explorer"}
                cta={"Schedule Plan"}
                bgImage={"img/plan_page_hero_image.png"}
            />

            <div className="itinerary-section">
                <h2>Itineraries</h2>

                <div className="itineraries-wrapper">

                    {/* Day 1 */}
                    <div className="itinerary-item">

                        <div className="day-header">
                            <span className="dot"></span>
                            <h3>Day 1</h3>
                        </div>

                        <div className="line"></div>

                        <div className="itinerary-details">

                            <div className="itinerary-detail">
                                <p className="time">06:00 AM</p>
                                <p className="place">Visit Marundeeswarar Temple</p>
                                <p className="location-link"><a href="#">Location Link</a></p>
                            </div>

                            <div className="itinerary-detail">
                                <p className="time">08:00 AM</p>
                                <p className="place">Visit Marina Beach</p>
                                <p className="location-link"><a href="#">Location Link</a></p>
                            </div>

                            <div className="itinerary-detail">
                                <p className="time">01:00 PM</p>
                                <p className="place">Lunch @ ABC restaurant</p>
                                <p className="location-link"><a href="#">Location Link</a></p>
                            </div>

                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className="itinerary-item">

                        <div className="day-header">
                            <span className="dot"></span>
                            <h3>Day 2</h3>
                        </div>

                        <div className="line"></div>

                        <div className="itinerary-details">

                            <div className="itinerary-detail">
                                <p className="time">06:00 AM</p>
                                <p className="place">Visit Marundeeswarar Temple</p>
                                <p className="location-link"><a href="#">Location Link</a></p>
                            </div>

                            <div className="itinerary-detail">
                                <p className="time">08:00 AM</p>
                                <p className="place">Visit Marina Beach</p>
                                <p className="location-link"><a href="#">Location Link</a></p>
                            </div>

                            <div className="itinerary-detail">
                                <p className="time">01:00 PM</p>
                                <p className="place">Lunch @ ABC restaurant</p>
                                <p className="location-link"><a href="#">Location Link</a></p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <PlacesList />
            <Footer />
        </div>
    )
};

export default ItineraryDetails;
