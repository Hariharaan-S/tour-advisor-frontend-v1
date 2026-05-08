import React, { useContext, useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./make-plan.styles.css";
import MorePlaces from "../../components/more-places/more-places.component";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";
import Loader from "../../components/loader/loader.component";
import FormInput from "../../components/form-input/form-input.component";
import TripPlanCard from "../../components/trip-plan-card/trip-plan-card.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectPlansOverview, selectPlanOverviewLoading, selectPlanOverviewError, selectPlanOverviewOnMount } from "../../store/plan-overview/plan-overview.selector";
import { fetchPlanOverviewFailure, fetchPlanOverviewStart, fetchPlanOverviewSuccess, fetchPlanOverviewStop, fetchPlanOverviewClear } from "../../store/plan-overview/plan-overview.actions";


const MakePlan = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const plansOverview = useSelector(selectPlansOverview);
  const loading = useSelector(selectPlanOverviewLoading);
  const error = useSelector(selectPlanOverviewError);
  const onMount = useSelector(selectPlanOverviewOnMount);
  const [form, setForm] = useState({
    cityName: "",
    numberOfDays: "",
    budget: "",
    userId: currentUser?._doc?.id,
  });

  useEffect(() => {
    dispatch(fetchPlanOverviewClear());
  }, []);

  useEffect(() => {
    console.log("MakePlan - currentUser:", currentUser);
    console.log("MakePlan - form.userId:", form.userId);
    if (currentUser?._doc?.id) {
      setForm((prev) => ({ ...prev, userId: currentUser._doc.id }));
    }
  }, [currentUser]);
  const [coordinates, setCoordinates] = useState(null);
  // const navigate = useNavigate();
  const loaderRef = useRef(null);
  const planRef = useRef(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name) {
      setForm((prev) => ({ ...prev, [name]: value }));
    } else {
      // Fallback for placeholder-based mapping
      const { placeholder } = e.target;
      const keyMap = {
        "Where do you want to go?": "cityName",
        "Number of days": "numberOfDays",
        "Your travel budget": "budget",
      };
      const key = keyMap[placeholder];
      if (key) setForm((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.userId) {
      dispatch(fetchPlanOverviewFailure("Please log in to create a plan"));
      return;
    }

    dispatch(fetchPlanOverviewStart());

    loaderRef.current?.scrollIntoView({ behavior: "smooth" });

    console.log("Submitting form data:", {
      cityName: form.cityName,
      numberOfDays: form.numberOfDays,
      budget: form.budget,
      userId: form.userId,
      coordinates: coordinates,
    });

    try {
      const res = await fetch("http://localhost:5000/api/plan/make-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          cityName: form.cityName,
          numberOfDays: form.numberOfDays,
          budget: form.budget,
          userId: form.userId,
          coordinates: coordinates,
        }),
      });

      const data = await res.json().catch(() => null);
      console.log("make-plan response =>", {
        status: res.status,
        ok: res.ok,
        data,
      });

      if (res.ok) {
        console.log("Plan created successfully:", data);
        dispatch(fetchPlanOverviewSuccess(data?.tripPlan || null));
      } else {
        dispatch(fetchPlanOverviewFailure(data?.message || "Failed to create plan"));
      }
    } catch (err) {
      console.log("make-plan error =>", err);
      dispatch(fetchPlanOverviewFailure(err.message || "An error occurred while creating the plan"));
    } finally {
      dispatch(fetchPlanOverviewStop());
    }
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    function successCallback(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setCoordinates({ lat: latitude, lng: longitude });
    }

    function errorCallback(error) {
      alert(`ERROR(${error.code}): ${error.message}`);
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <>
      <div className="make-plan-section make-plan-hero">
        <div className="make-plan-overlay"></div>
        <div className="make-plan-gradient-overlay"></div>
        {form.userId && (
          <div className="make-plan-container">
            <div className="make-plan-hero-grid">
              <div className="make-plan-hero-copy">
                <span className="section-badge">Tailor-Made Journeys</span>
                <div className="plan-form-header">
                  <h1>Your Next Trip Starts Here</h1>
                <p>
                  Discover routes, stays, and experiences—effortlessly.
                  <br />
                  Tell us about your travel preferences and we'll create a
                  personalized itinerary just for you.
                </p>
              </div>

              <div className="plan-hero-features">
                <div className="feature-card">
                  <strong>Fast planning</strong>
                  <p>
                    Build your itinerary in seconds with smart route generation.
                  </p>
                </div>
                <div className="feature-card">
                  <strong>Local insights</strong>
                  <p>
                    Enjoy curated recommendations designed for Israel travel.
                  </p>
                </div>
              </div>
            </div>

            <div className="plan-form-section plan-form-hero">
              <div className="plan-form-header">
                <h2>Plan your ideal stay</h2>
                <p>
                  Enter your destination, duration, and budget. We'll handle the
                  rest.
                </p>
              </div>

              <form className="plan-form" onSubmit={handleSubmit}>
                <FormInput
                  type="text"
                  name="cityName"
                  label="Destination"
                  placeholder="Where do you want to go?"
                  value={form.cityName}
                  onChange={handleChange}
                  icon="📍"
                  required
                />
                <FormInput
                  type="number"
                  name="numberOfDays"
                  label="Duration"
                  placeholder="Number of days"
                  value={form.numberOfDays}
                  onChange={handleChange}
                  icon="📅"
                  required
                />
                <FormInput
                  type="text"
                  name="budget"
                  label="Budget"
                  placeholder="Your travel budget"
                  value={form.budget}
                  onChange={handleChange}
                  icon="💰"
                  required
                />

                <div className="form-actions">
                  <Button
                    buttonType="default"
                    buttonValue={
                      loading ? "Creating Plan..." : "Create My Plan"
                    }
                    customStyle={{ width: "100%" }}
                  />
                </div>
              </form>

              {error && (
                <div className="error-message">
                  <span className="error-icon">⚠️</span>
                  <p>
                    {error ||
                      "Unable to create plan. Please try again."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>)}
      </div>
      {loading && !error && (
        <div className="make-plan-loader" ref={loaderRef}>
          <Loader
            active={loading}
            onComplete={() => {
              if (plansOverview && plansOverview.length > 0) {
                setTimeout(
                  () => planRef.current?.scrollIntoView({ behavior: "smooth" }),
                  100,
                );
              }
            }}
          />
        </div>
      )}

      {!loading && !error && onMount && (
        <div className="result-plan-section" ref={planRef}>
          <div className="result-plan-header">
            <h2>Your Trip Plan is Ready!</h2>
            <p>
              We've created a personalized itinerary based on your preferences.
            </p>
          </div>
          {plansOverview &&
            (plansOverview.length > 0 ? (
              plansOverview.map((dayPlan, index) => (
                <TripPlanCard key={index} dayPlan={dayPlan} formData={form} />
              ))
            ) : (
              <p className="no-plan-message">
                We couldn't generate a plan based on the provided information.
                Please try adjusting your preferences.
              </p>
            ))}
          <MorePlaces />
          <Footer />
        </div>
      )}
    </>
  );
};

export default MakePlan;
