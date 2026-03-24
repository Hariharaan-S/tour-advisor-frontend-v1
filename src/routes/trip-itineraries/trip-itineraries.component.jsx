import React, { useContext, useEffect, useState } from "react";
import "./trip-itineraries.styles.css";
import HeroSection from "../../components/hero-section/hero-section.component";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import MorePlaces from "../../components/more-places/more-places.component";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const TripItineraries = () => {
  const userContext = useContext(UserContext);
  // Look at your console log: user is nested inside the context object
  const userId = userContext?.user?._doc?.id;
  const planId = useParams().planId;

  const [details, setDetails] = useState({});
  const [itineraries, setItineraries] = useState({});

  // 1. Fetching Logic (Depends on IDs)
  // 1. Fetching Logic
  useEffect(() => {
    if (!userId || !planId) return;

    const fetchPlanDetails = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/plan/view-plan/${userId}/${planId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },
        );
        const data = await res.json();

        // FIX: Set details to data.planData instead of the whole response
        if (data.planData) {
          setDetails(data.planData);
        }
      } catch (error) {
        console.error("Error fetching plan details:", error);
      }
    };

    fetchPlanDetails();
  }, [userId, planId]);

  // 2. Transformation Logic (Depends on details)
  useEffect(() => {
    if (details?.instructions) {
      const grouped = details.instructions.reduce((acc, inst) => {
        const day = inst.day;
        if (!acc[day]) acc[day] = [];
        acc[day].push(inst);
        return acc;
      }, {});
      setItineraries(grouped);
    }
  }, [details]); // Only runs when details state is actually updated

  return (
    <div className="trip-itineraries-page">
      <HeroSection
        title={details?.title || "Your Perfect Getaway Awaits"}
        description={details?.description || "Chennai City Explorer"}
        cta="Save Plan"
        bgImage="img/trip-iti.png"
      />
      <div className="trip-itineraries-section">
        <div className="trip-itineraries-container">
          <h2 className="trip-itineraries-title">ITINERARIES</h2>
          <div className="itinerary-cards">
            {Object.keys(itineraries)
              .sort((a, b) => Number(a) - Number(b))
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
