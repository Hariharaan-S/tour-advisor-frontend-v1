import React, { useContext } from "react";
import { useState, useEffect } from "react";
import TripPlanCard from "../../components/trip-plan-card/trip-plan-card.component";
import "./view-plans.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectPlanOverviewError, selectPlansOverview } from "../../store/plan-overview/plan-overview.selector";
import { fetchPlanOverviewFailure, fetchPlanOverviewSuccess } from "../../store/plan-overview/plan-overview.actions";


const ViewPlans = () => {
  const dispatch = useDispatch();
  const plansOverview = useSelector(selectPlansOverview);
  const planError = useSelector(selectPlanOverviewError);
  const currentUser = useSelector(selectCurrentUser);
  const userId = currentUser?._doc?.id;

  useEffect(() => {
    if (!userId) {
      dispatch(fetchPlanOverviewFailure("User not logged in"));
      return;
    }

    const fetchAllPlans = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/plan/view-all/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        const data = await response.json();
        if (!data.userPlansArray || data.userPlansArray.length === 0) {
          dispatch(fetchPlanOverviewFailure("No plans found"));
        } else {
          dispatch(fetchPlanOverviewSuccess(data.userPlansArray));
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
        dispatch(fetchPlanOverviewFailure("Failed to fetch plans"));
      }
    };

    fetchAllPlans();
  }, [userId]);

  return (
    <div className="view-plans-page">
      <h1>My Plans</h1>
      <div>
        {plansOverview.map((plan) => (
          plan && <TripPlanCard key={plan.planId} dayPlan={plan} />
        ))}
      </div>
    </div>
  );
};

export default ViewPlans;
