import React from "react";
import Form from "../../components/form/form.component";
import "./signup.styles.css";

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="signup-overlay"></div>
            <div className="signup-component">
                <div className="signup-form-section">
                    <h2 className="signup-form-title">Create an account</h2>
                    <Form fields={["Username", "Email", "Create new Password", "Confirm Password"]} isLogin={false} />
                </div>
                <div className="signup-hero-section">
                    <div className="signup-logo">
                        <span className="logo-icon">◇</span>
                        <span className="logo-name">ROAM</span>
                    </div>
                    <h2 className="signup-hero-title">Join ROAM</h2>
                    <p className="signup-hero-description">
                        Plan smarter. Travel better. Start curating your world today.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
