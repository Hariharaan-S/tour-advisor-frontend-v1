import React from "react";
import Form from "../../components/form/form.component";
import "./login.styles.css";

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-overlay"></div>
            <div className="login-component">
                <div className="login-hero-section">
                    <div className="login-logo">
                        <span className="logo-icon">◇</span>
                        <span className="logo-name">ROAM</span>
                    </div>
                    <h2 className="login-hero-title">Welcome Back</h2>
                    <p className="login-hero-description">
                        Plan smarter. Travel better. Discover the world with intelligent trip planning.
                    </p>
                </div>
                <div className="login-form-section">
                    <h2 className="login-form-title">Sign in</h2>
                    <Form fields={["Username", "Password"]} isLogin={true} />
                </div>
            </div>
        </div>
    );
};

export default Login;
