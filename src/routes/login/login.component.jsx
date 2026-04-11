import React from "react";
import Form from "../../components/form/form.component";
import loginBg from "../../assets/img/login-bg.jpg";
import logoIcon from "../../assets/img/logo.png";
import "./login.styles.css";

const Login = () => {
    const loginPageStyle = {
        minHeight: "100vh",
        position: "relative",
        backgroundImage: `url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="login-page" style={loginPageStyle}>
            <div className="login-overlay"></div>
            <div className="login-component">
                <div className="login-hero-section">
                    <div className="login-logo">
                        <span className="logo-icon"><img src={logoIcon} alt="Logo" /></span>
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
