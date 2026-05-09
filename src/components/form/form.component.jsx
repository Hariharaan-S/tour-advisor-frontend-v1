import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import SocialMediaButtons from "../social-media/social-media.component";
import Button from "../button/button.component";
import { login } from "../../utils/user.utils";
import PasswordInput from "../password-input/password-input.component";
import "./form.styles.css";
import { setCurrentUser } from "../../store/user/user.actions";

const Form = ({ fields, isLogin }) => {
  const buttonType = isLogin ? "login" : "register";
  const buttonValue = isLogin ? "Login" : "Register";
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate("/register");
  };

  const redirectToForgotPassword = () => {
    navigate("/login");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password || formData.createnewpassword,
    };

    console.log(payload);

    if (!payload.email || !payload.password) {
      console.error("Both email/username and password are required");
      return;
    }

    if (!isLogin && payload.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    const endpoint = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          if (data.user) {
            dispatch(
              setCurrentUser(
                login(
                  {
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                  },
                  data.user,
                ),
              ),
            );
          } else {
            dispatch(
              setCurrentUser(
                login({
                  accessToken: data.accessToken,
                  refreshToken: data.refreshToken,
                }),
              ),
            );
          }
          navigate("/");
        } else {
          console.error(
            isLogin ? "Login failed:" : "Register failed:",
            data.error || data.message,
          );
          alert(
            (isLogin ? "Login failed: " : "Register failed: ") +
              (data.error || data.message),
          );
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("Error during login: " + error);
      });
  };

  return (
    // TODO: Implement show/hide password functionality using the viewPasswordIconsMap and showPassword state -->
    <form onSubmit={handleSubmit}>
      <div className="glassmorph-bg">
        <div className="form-fields">
          {fields.map((f, i) => {
            const key = f.toLowerCase().replace(/\s+/g, "");
            let inputType = "text";

            if (f.toLowerCase().includes("password")) {
              inputType = "password";
            }
            if (key === "email") inputType = "email";

            const translatedLabel = t(f);
            return (
              <div className="form-field" key={i}>
                {inputType === "password" ? (
                  <PasswordInput
                    label={translatedLabel}
                    value={formData[key] || ""}
                    onChange={handleChange}
                  />
                ) : (
                  <>
                    <label htmlFor={key}>{translatedLabel}</label>
                    <input
                      type={inputType}
                      name={key}
                      id={key}
                      onChange={handleChange}
                      placeholder={translatedLabel}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {isLogin && (
          <div className="forgot-password">
            <p onClick={redirectToRegister}>
              {t("New User?")} <span>{t("Register")}</span>
            </p>
            <p onClick={redirectToForgotPassword}>{t("Forgot Password?")}</p>
          </div>
        )}

        <Button buttonType={buttonType} buttonValue={buttonValue} />
        <p className="login-sub-description">{t("or login with")}</p>
        <SocialMediaButtons />
      </div>
    </form>
  );
};

export default Form;
