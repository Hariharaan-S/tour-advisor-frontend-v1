import React from "react";
import "./trip-itineraries.styles.css";
import HeroSection from "../../components/hero-section/hero-section.component";
import Button from "../../components/button/button.component";
import PlacesList from "../../components/places-list/places-list.component";
import Footer from "../../components/footer/footer.component";

const TripItineraries = () => {
  return (
    <div>
      <div className="trip-iti-overlay"></div>
      <HeroSection
        title="Your Perfect Getaway Awaits"
        description="Chennai City Explorer"
        cta="Save Plan"
        bgImage="img/trip-iti.png"
      />
      <div className="trip-itineraries">
        <h2>Itineraries</h2>
        <div className="itineraries-wrapper">
          <div className="marker-column">
            <div className="marker"></div>
            <div className="line"></div>
          </div>
          <div className="itinerary-cards">
            <div className="itinerary-card">
              <h3>Day 1</h3>
              <div className="itineraries-details">
                <div className="detail">
                  <p className="time">06.00 AM</p>
                  <p className="instruction">Visit Marundeeswarar Temple</p>
                  <p className="location">
                    <a href="#">Location Link</a>
                  </p>
                </div>
                <div className="detail">
                  <p className="time">06.00 AM</p>
                  <p className="instruction">Visit Marundeeswarar Temple</p>
                  <p className="location">
                    <a href="#">Location Link</a>
                  </p>
                </div>
                <div className="detail">
                  <p className="time">06.00 AM</p>
                  <p className="instruction">Visit Marundeeswarar Temple</p>
                  <p className="location">
                    <a href="#">Location Link</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="itinerary-card">
              <h3>Day 2</h3>
              <div className="itineraries-details">
                <div className="detail">
                  <p className="time">06.00 AM</p>
                  <p className="instruction">Visit Marundeeswarar Temple</p>
                  <p className="location">
                    <a href="#">Location Link</a>
                  </p>
                </div>
                <div className="detail">
                  <p className="time">06.00 AM</p>
                  <p className="instruction">Visit Marundeeswarar Temple</p>
                  <p className="location">
                    <a href="#">Location Link</a>
                  </p>
                </div>
                <div className="detail">
                  <p className="time">06.00 AM</p>
                  <p className="instruction">Visit Marundeeswarar Temple</p>
                  <p className="location">
                    <a href="#">Location Link</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button buttonType="login" buttonValue="Schedule/Save Plan" />
      </div>
      <PlacesList/>
      <Footer/>
    </div>
  );
};

export default TripItineraries;
