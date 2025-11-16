import React from "react";
import Form from "../../components/form/form.component";
import './signup.styles.css';

const Signup = () => {
    return (
        <>
            <div className="overlay"></div>
            <div className="signup-component">
                <div className="signup-form-section">
                    <h2 className="signup-form-title">Create an account</h2>
                    <Form fields={["Username", "Create new Password", "Confirm Password"]} isLogin={false} />
                </div>
                <div className="signup-hero-section">
                    <div className="logo">
                        <img src="img/logo.png" alt="" />
                    </div>
                    <h2 className="signup-hero-title">Tour Advisor</h2>
                    <h3 className="signup-hero-subtitle">Plan Smater, Travel Better</h3>
                </div>
            </div>
        </>
    )
}


export default Signup;