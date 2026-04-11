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

  const capitalizeName = (name) => (
    name.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
  )

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

  const touristSpots = details?.tourist_spots || [];
  const transportList = details?.transport || [];
  const instructionList = details?.instructions || [];
  const costSummary = details?.cost_summary || {};
  const totalCost = costSummary.total_cost_for_people ?? 0;
  const peopleCount = costSummary.people_count ?? details?.people ?? 0;

  const getPlaceholderImage = (name) =>
    `http://localhost:5000/api/plan/image/${encodeURIComponent(name)}`;

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
          <div className="plan-header-row">
            <div>
              <h2 className="trip-itineraries-title">ITINERARIES</h2>
              {details?.description && (
                <p className="trip-plan-description">{details.description}</p>
              )}
            </div>
            <div className="plan-summary-card">
              <p>Total cost</p>
              <h3>₹{totalCost.toLocaleString()}</h3>
              <p>{peopleCount} people</p>
            </div>
          </div>

          <section className="section section-spots">
            <div className="section-title-row">
              <h3>Spots You Will Visit</h3>
            </div>
            <div className="spot-grid">
              {touristSpots.length > 0 ? (
                touristSpots.map((spot) => (
                  <div className="spot-card" key={spot._id || spot.name}>
                    <div className="spot-image">
                      <img
                        src={getPlaceholderImage(spot.name)}
                        alt={spot.name}
                      />
                      <div className="spot-overlay">
                        <p>{spot.description}</p>
                      </div>
                    </div>
                    <div className="spot-card-body">
                      <h4>{capitalizeName(spot.name)}</h4>
                      <span>Popularity: {Number(1 + 4.0 * spot.popularity)}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>No tourist spots available yet.</p>
              )}
            </div>
          </section>

          <section className="section section-transport">
            <div className="section-title-row">
              <h3>Transportation</h3>
            </div>
            <div className="transport-table-wrapper">
              <table className="transport-table">
                <thead>
                  <tr>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Distance (km)</th>
                    <th>Mode</th>
                    <th>Duration (min)</th>
                    <th>Avg Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {transportList.length > 0 ? (
                    transportList.map((transport) => (
                      <tr key={transport._id || `${transport.origin}-${transport.destination}`}>
                        <td>{capitalizeName(transport.origin)}</td>
                        <td>{capitalizeName(transport.destination)}</td>
                        <td>{transport.distance_km}</td>
                        <td>{transport.name}</td>
                        <td>{transport.duration}</td>
                        <td>₹{transport.average_cost}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No transportation data available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="section section-instructions">
            <div className="section-title-row">
              <h3>Instructions</h3>
            </div>
            <div className="instructions-list">
              {instructionList.length > 0 ? (
                instructionList.map((inst) => (
                  <div
                    className="instruction-item"
                    key={inst._id || `${inst.day}-${inst.time}-${inst.place_name}`}
                  >
                    <div className="instruction-header">
                      <span className="instruction-day">Day {inst.day}</span>
                      <span className="instruction-time">{inst.time}</span>
                    </div>
                    <h4>{capitalizeName(inst.place_name)}</h4>
                    <p>{inst.description}</p>
                  </div>
                ))
              ) : (
                <p>No instructions available yet.</p>
              )}
            </div>
          </section>

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
