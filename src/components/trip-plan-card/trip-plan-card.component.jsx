import React from "react";
import "./trip-plan-card.styles.css";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const TripPlanCard = ({ plan, formData, onNavigate }) => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        if (onNavigate) {
            onNavigate();
        } else {
            navigate("/trip-itineraries");
        }
    };

    return (
        <div className="trip-plan-card">
            <div className="trip-plan-image">
                <img src="/img/result-plan.png" alt="Trip destination" />
            </div>
            <div className="trip-plan-content">
                <div className="trip-plan-header">
                    <h3>{plan?.title || "Planned Trip"}</h3>
                    <p className="trip-plan-description">
                        {plan?.description || "Your trip plan has been generated successfully."}
                    </p>
                </div>
                
                <div className="trip-plan-features">
                    <div className="trip-feature">
                        <div className="feature-icon">
                            <img src="img/days.png" alt="Days" />
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
                            <img src="img/people.png" alt="People" />
                        </div>
                        <div className="feature-info">
                            <span className="feature-label">Travelers</span>
                            <span className="feature-value">
                                {plan?.people ? `${plan.people} persons` : "N/A"}
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
