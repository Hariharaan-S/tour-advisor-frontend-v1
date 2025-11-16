import React from "react";
import './make-plan.styles.css';
import Navbar from "../../components/navbar/navbar.component";
import PlacesList from "../../components/places-list/places-list.component";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";

const MakePlan = () => {
    return (
        <>
            <Navbar />
            <div className="plan-container">
                {/* Left: Form */}
                <div className="plan-form-container">
                    <h2>Your Trip, Your Way</h2>
                    <p>Browse and customize your trip.</p>

                    <form className="plan-form">
                        <input type="text" placeholder="Destination Place" />
                        <input type="text" placeholder="Number of Days" />
                        <input type="text" placeholder="Budget" />

                        <Button buttonType="login" buttonValue="Make Plan" />
                    </form>
                </div>

                {/* Right: Image */}
                <div className="plan-image-container">
                    <img src="/img/plan image.png" alt="Planning trip" />
                </div>

            </div>

            <div className="result-plan-section">
                <h2>Your trip plan is all set!</h2>
                <div className="result-plan-wrapper">
                    <div className="result-plan-card">
                        <div className="result-plan-image">
                            <img src="/img/result-plan.png" alt="Destination" />
                        </div>
                        <div className="result-plan-details">
                            <h3>Chennai City Explorer</h3>
                            <p>Discover the charm of Chennai with its beaches,
                                temples, and vibrant culture.</p>

                            <div className="plan-features">
                                <div className="feature">
                                    <img src="img/days.png" alt="" />
                                    <p>3 Days, 2 Nights</p>
                                </div>
                                <div className="feature">
                                    <img src="img/people.png" alt="" />
                                    <p>2 people</p>
                                </div>
                            </div>
                            <div className="plan-btn"><Button buttonType={"login"} buttonValue={"Make Plan"} /></div>

                        </div>

                    </div>
                </div>
            </div>

            <PlacesList />
            <Footer />
        </>
    );
};

export default MakePlan;
