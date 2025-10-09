import React from "react";
import SocialMediaButtons from '../social-media/social-media.component'
import Button from "../button/button.component";
import './form.styles.css'

const Form = ({ fields, isLogin }) => {
    const buttonType = isLogin ? 'login' : 'register';
    const buttonValue = isLogin ? 'Login' : 'Register';
    return (
        <form>
            <div className="glassmorph-bg">
                <div className="form-fields">
                    {fields.map((f, i) => {
                        let inputType = "text";

                        if (f.toLowerCase().includes("password")) inputType = "password";
                        if (f.toLowerCase() === "email") inputType = "email";

                        return (
                            <div className="form-field" key={i}>
                                <label htmlFor={f}>{f}</label>
                                <input type={inputType} name={f} />
                            </div>
                        );
                    })}
                </div>

                {isLogin && <div className="forgot-password">
                    <p>
                        New User? <span>Register</span>
                    </p>
                    <p>Forgot Password?</p>
                </div>
                }


                <Button buttonType={buttonType} buttonValue={buttonValue} />
                <p className="login-sub-description">or login with</p>
                <SocialMediaButtons />
            </div>

        </form>
    );
};

export default Form;
