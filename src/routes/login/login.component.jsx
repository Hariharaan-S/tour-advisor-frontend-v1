import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/form/form.component";
import loginBg from "../../assets/img/login-bg.jpg";
import logoIcon from "../../assets/img/logo.png";
import { setLanguage } from "../../store/language/language.actions";
import { selectLanguage } from "../../store/language/language.selector";
import "./login.styles.css";

const Login = () => {
    const dispatch = useDispatch();
    const language = useSelector(selectLanguage);
    const { t } = useTranslation();

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
    };
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
            <div className="language-toggle">
                <label htmlFor="language-select">{t("Language")}</label>
                <select
                    id="language-select"
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                >
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                </select>
            </div>
            <div className="login-overlay"></div>
            <div className="login-component">
                <div className="login-hero-section">
                    <div className="login-logo">
                        <span className="logo-icon"><img src={logoIcon} alt="Logo" /></span>
                        <span className="logo-name">Tour Advisor</span>
                    </div>
                    <h2 className="login-hero-title">{t("Welcome Back")}</h2>
                    <p className="login-hero-description">
                        {t("login_description")}
                    </p>
                </div>
                <div className="login-form-section">
                    <h2 className="login-form-title">{t("Sign in")}</h2>
                    <Form fields={["Email", "Password"]} isLogin={true} />
                </div>
            </div>
        </div>
    );
};

export default Login;
