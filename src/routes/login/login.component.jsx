import React from "react";
import Form from "../../components/form/form.component";
import './login.styles.css'

const Login = () => {
    return (
        <>
            <div className="overlay"></div>
            <div className="login-component">
                <div className="login-hero-section">
                    <div className="logo">
                        <img src="img/logo.png" alt="" />
                    </div>
                    <h2 className="login-hero-title">Tour Advisor</h2>
                    <h3 className="login-hero-subtitle">Plan Smater, Travel Better</h3>
                    <p className="login-hero-description">Discover destinations, create personalized itineraries</p>
                </div>
                <div className="login-form-section">
                    <h2 className="login-form-title">Welcome back</h2>
                    <Form fields={["Username", "Password"]} isLogin={true} />
                </div>
            </div>
        </>

    )
}

export default Login;