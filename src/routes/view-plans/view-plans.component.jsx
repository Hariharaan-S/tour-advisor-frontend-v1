import React, { useContext } from "react";
import { useState, useEffect } from "react";
import TripPlanCard from "../../components/trip-plan-card/trip-plan-card.component";
import "./view-plans.styles.css";
import { UserContext } from "../../context/UserContext";

const ViewPlans = () => {
  const [plans, setPlans] = useState([]);
  const {user} = useContext(UserContext);
  const userId = user?._doc?.id;

  useEffect(() => {
    const fetchAllPlans = async () => {
      await fetch("http://localhost:5000/api/plan/view-all/" + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        }
      }).then(data => data.json()).then(data => {
        if(!data.userPlansArray || data.userPlansArray.length === 0) {
            setPlans([]);
        } else {
            setPlans(data.userPlansArray);
        }
        }
      )
    };
    fetchAllPlans();

    return setPlans([]);
  },[]);

  return (
    <div className="view-plans-page">
      <h1>My Plans</h1>
      <div>
        {plans.map((plan) => (
          plan && <TripPlanCard key={plan.planId} dayPlan={plan} />
        ))}
      </div>
    </div>
  );
};

export default ViewPlans;
