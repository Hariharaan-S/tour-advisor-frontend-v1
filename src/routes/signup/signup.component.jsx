import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/form/form.component";
import signupBg from "../../assets/img/login-bg.jpg"; // reuse or swap for signup-specific bg
import logoIcon from "../../assets/img/logo.png";
import { setLanguage } from "../../store/language/language.actions";
import { selectLanguage } from "../../store/language/language.selector";
import "./signup.styles.css";

const Signup = () => {
    const dispatch = useDispatch();
    const language = useSelector(selectLanguage);
    const { t } = useTranslation();

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
    };

    const signupPageStyle = {
        minHeight: "100vh",
        position: "relative",
        backgroundImage: `url(${signupBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="signup-page" style={signupPageStyle}>

            {/* Language toggle — identical to login */}
            <div className="language-toggle">
                <label htmlFor="signup-language-select">{t("Language")}</label>
                <select
                    id="signup-language-select"
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                >
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                </select>
            </div>

            <div className="signup-overlay"></div>

            <div className="signup-component">

                {/* Hero — mirrors login-hero-section */}
                <div className="signup-hero-section">
                    <div className="signup-logo">
                        <span className="logo-icon">
                            <img src={logoIcon} alt="Logo" />
                        </span>
                        <span className="logo-name">Tour Advisor</span>
                    </div>
                    <h2 className="signup-hero-title">{t("Join Us")}</h2>
                    <p className="signup-hero-description">
                        {t("signup_description")}
                    </p>
                </div>

                {/* Form — mirrors login-form-section */}
                <div className="signup-form-section">
                    <h2 className="signup-form-title">{t("Create an account")}</h2>
                    <Form
                        fields={["Username", "Email", "Create new Password", "Confirm Password"]}
                        isLogin={false}
                    />
                </div>

            </div>
        </div>
    );
};

export default Signup;
