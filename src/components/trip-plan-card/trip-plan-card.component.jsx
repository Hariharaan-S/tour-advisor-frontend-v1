import React from "react";
import "./trip-plan-card.styles.css";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import ResultPlan from "../../assets/img/result-plan.png";
import DaysIcon from "../../assets/img/days.png";
import PeopleIcon from "../../assets/img/people.png";


const TripPlanCard = ({ dayPlan, formData }) => {
    const navigate = useNavigate();
    console.log(dayPlan);
    const planId = dayPlan?.planId;
    
    const handleNavigate = () => {
        navigate(`/trip-itineraries/${planId}`);
    };

    return (
        <div className="trip-plan-card">
            <div className="trip-plan-image">
                <img src={ResultPlan} alt="Trip destination" />
            </div>
            <div className="trip-plan-content">
                <div className="trip-plan-header">
                    <h3>{dayPlan?.title || "Planned Trip"}</h3>
                    <p className="trip-plan-description">
                        {dayPlan?.description || "Your trip plan has been generated successfully."}
                    </p>
                </div>
                
                <div className="trip-plan-features">
                    <div className="trip-feature">
                        <div className="feature-icon">
                            <img src={DaysIcon} alt="Days" />
                        </div>
                        <div className="feature-info">
                            <span className="feature-label">Duration</span>
                            <span className="feature-value">
                                {formData?.numberOfDays ? `${formData.numberOfDays} Days` : "N/A"}
                            </span>
                        </div>
                    </div>
                    <div className="trip-feature">
                        <div className="feature-icon">
                            <img src={PeopleIcon} alt="People" />
                        </div>
                        <div className="feature-info">
                            <span className="feature-label">Travelers</span>
                            <span className="feature-value">
                                {dayPlan?.people ? `${dayPlan.people} persons` : "N/A"}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="trip-plan-actions">
                    <Button
                        buttonType="default"
                        buttonValue="View Itinerary"
                        onClick={handleNavigate}
                        type="button"
                    />
                </div>
            </div>
        </div>
    );
};

export default TripPlanCard;
