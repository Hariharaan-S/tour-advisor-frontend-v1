import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./make-plan.styles.css";
import MorePlaces from "../../components/more-places/more-places.component";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";
import { PlanContext } from "../../context/PlanContext";
import Loader from "../../components/loader/loader.component";
import FormInput from "../../components/form-input/form-input.component";
import TripPlanCard from "../../components/trip-plan-card/trip-plan-card.component";

const MakePlan = () => {
  const { updatePlan } = useContext(PlanContext);
  const [form, setForm] = useState({
    cityName: "",
    numberOfDays: "",
    budget: "",
  });
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
    setLoading(true);
    setError(null);
    setResponseData(null);
    setIsLoading(true);
    loaderRef.current?.scrollIntoView({ behavior: "smooth" });

    try {
      const res = await fetch("http://localhost:5000/api/plan/make-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cityName: form.cityName,
          numberOfDays: form.numberOfDays,
          budget: form.budget,
        }),
      });

      const data = await res.json().catch(() => null);
      console.log("make-plan response =>", {
        status: res.status,
        ok: res.ok,
        data,
      });

      if (res.ok) {
        setIsLoading(false);
        setResponseData(data || {});
        updatePlan(data || {});
        setTimeout(
          () => planRef.current?.scrollIntoView({ behavior: "smooth" }),
          100
        );
      } else {
        setIsLoading(false);
        setError(data || { message: "Server returned an error" });
      }
    } catch (err) {
      console.log("make-plan error =>", err);
      setIsLoading(false);
      setError({ message: err.message || "Network error" });
    } finally {
      setIsLoading(false);
      setLoading(false);
    }
  };

  const shouldShowResult = responseData && !error;

  return (
    <>
      <div className="make-plan-section make-plan-hero">
        <div className="make-plan-container">
          
            <div className="plan-form-header">
              <h1>Your Next Trip Starts Here</h1>
              <p>Discover routes, stays, and experiences—effortlessly<br />Tell us about your travel preferences and we'll create a personalized itinerary just for you.</p>
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
                  buttonValue={loading ? "Creating Plan..." : "Create My Plan"}
                  customStyle={{ width: "100%" }}
                />
              </div>
            </form>

            {error && (
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                <p>{error.message || "Unable to create plan. Please try again."}</p>
              </div>
            )}
          
        </div>
      </div>
      {isLoading && (
        <div className="make-plan-loader" ref={loaderRef}>
          <Loader />
        </div>
      )}

      {shouldShowResult && (
        <div className="result-plan-section" ref={planRef}>
          <div className="result-plan-header">
            <h2>Your Trip Plan is Ready!</h2>
            <p>We've created a personalized itinerary based on your preferences.</p>
          </div>
          <TripPlanCard 
            plan={responseData.plan} 
            formData={form}
            onNavigate={() => navigate("/trip-itineraries")}
          />
        </div>
      )}

      <MorePlaces />
      <Footer />
    </>
  );
};

export default MakePlan;
