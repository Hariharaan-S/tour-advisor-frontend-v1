import React, { useContext, useEffect, useState } from "react";
import "./trip-itineraries.styles.css";
import HeroSection from "../../components/hero-section/hero-section.component";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import { PlanContext } from "../../context/PlanContext";
import MorePlaces from "../../components/more-places/more-places.component";

const TripItineraries = () => {
  const plan = useContext(PlanContext);

  const details = plan?.plan?.plan;
  const title = details?.title;
  const description = details?.description;
  const [itineraries, setItineraries] = useState({});

  useEffect(() => {
    const instructions = details?.instructions || [];
    const grouped = instructions.reduce((acc, inst) => {
      const day = inst.day;
      if (!acc[day]) acc[day] = [];
      acc[day].push(inst);
      return acc;
    }, {});
    setItineraries(grouped);
  }, [details]);

  return (
    <div className="trip-itineraries-page">
      <HeroSection
        title={title || "Your Perfect Getaway Awaits"}
        description={description || "Chennai City Explorer"}
        cta="Save Plan"
        bgImage="img/trip-iti.png"
      />
      <div className="trip-itineraries-section">
        <div className="trip-itineraries-container">
          <h2 className="trip-itineraries-title">ITINERARIES</h2>
          <div className="itinerary-cards">
            {Object.keys(itineraries)
              .sort((a, b) => a - b)
              .map((day, index, arr) => (
                <div className="itinerary-card" key={day}>
                  <div className="day-header">
                    <span className="dot"></span>
                    <h3>Day {day}</h3>
                  </div>
                  {index < arr.length - 1 && <div className="line"></div>}
                  <div className="itineraries-details">
                    {itineraries[day].map((inst, idx) => (
                      <div className="detail" key={idx}>
                        <p className="time">{inst.time}</p>
                        <p className="instruction">{inst.place_name}</p>
                        <p className="location">
                          <a
                            href={
                              inst.location_link !== "NOT_AVAILABLE"
                                ? inst.location_link
                                : "#"
                            }
                          >
                            Location Link
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <div className="trip-itineraries-actions">
            <Button buttonType="default" buttonValue="Schedule/Save Plan" />
          </div>
        </div>
      </div>
      <MorePlaces />
      <Footer />
    </div>
  );
};

export default TripItineraries;
