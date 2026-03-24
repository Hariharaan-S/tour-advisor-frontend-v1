import React from "react";
import Form from "../../components/form/form.component";
import "./login.styles.css";

const Login = () => {
    const loginPageStyle = {
        minHeight: "100vh",
        position: "relative",
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/login-bg.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <div className="login-page" style={loginPageStyle}>
            <div className="login-overlay"></div>
            <div className="login-component">
                <div className="login-hero-section">
                    <div className="login-logo">
                        <span className="logo-icon"><img src="img/logo.png" alt="Logo" srcset="" /></span>
                        <span className="logo-name">Tour Advisor</span>
                    </div>
                    <h2 className="login-hero-title">Welcome Back</h2>
                    <p className="login-hero-description">
                        Plan smarter. Travel better. Discover the world with intelligent trip planning.
                    </p>
                </div>
                <div className="login-form-section">
                    <h2 className="login-form-title">Sign in</h2>
                    <Form fields={["Email", "Password"]} isLogin={true} />
                </div>
            </div>
        </div>
    );
};

export default Login;
