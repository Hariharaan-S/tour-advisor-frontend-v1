import React, { useEffect } from "react";
import "./trip-itineraries.styles.css";
import HeroSection from "../../components/hero-section/hero-section.component";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import MorePlaces from "../../components/more-places/more-places.component";
import { useParams } from "react-router-dom";
import MapContainer from "../../components/map/map.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { fetchPlanError, updatePlan } from "../../store/plan/plan.actions";
import { selectPlanData, selectPlanInstructions } from "../../store/plan/plan.selector";

const TripItineraries = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // Look at your console log: user is nested inside the context object
  const userId = currentUser?._doc?.id;
  const planId = useParams().planId;
  const details = useSelector(selectPlanData);
  const itineraries = useSelector(selectPlanInstructions).reduce((acc, inst) => {
        const day = inst.day;
        if (!acc[day]) acc[day] = [];
        acc[day].push(inst);
        return acc;
      }, {});

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
          dispatch(updatePlan(data.planData));
        }
      } catch (error) {
        dispatch(fetchPlanError(error.message || "Failed to fetch plan details"));
      }
    };

    fetchPlanDetails();
  }, [userId, planId]);

  const touristSpots = details?.tourist_spots || [];
  const transportList = details?.transport || [];
  const instructionList = details?.instructions || [];
  const costSummary = details?.cost_summary || {};
  const totalCost = costSummary.total_cost_for_people ?? 0;
  const peopleCount = costSummary.people_count ?? details?.people ?? 0;

  const originPlace = touristSpots.length > 0 ? touristSpots[0]?.name ?? '' : '';
  const destinationPlace = touristSpots.length > 1 ? touristSpots[touristSpots.length - 1]?.name ?? '' : originPlace;

  const wayPointsPlaces = touristSpots
    .slice(1, -1)
    .map((spot) => spot?.name)
    .filter(Boolean);

  const hasMapRoute = originPlace && destinationPlace;

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

            <div className="tourist-spots-maps-embed">
              {hasMapRoute ? (
                <MapContainer waypointsPlaces={wayPointsPlaces} />
              ) : (
                <p>Please add at least two tourist spots to display the route map.</p>
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
