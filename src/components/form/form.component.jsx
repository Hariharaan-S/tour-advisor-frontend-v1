import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SocialMediaButtons from '../social-media/social-media.component'
import Button from "../button/button.component";
import './form.styles.css'
import { UserContext } from '../../context/UserContext';

const Form = ({ fields, isLogin }) => {
    const buttonType = isLogin ? 'login' : 'register';
    const buttonValue = isLogin ? 'Login' : 'Register';
    

    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const redirectToRegister = () => {
        navigate('/register');
    }

    const redirectToForgotPassword = () => {
        navigate('/login');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: formData.email || formData.username,
            password: formData.password,
        };

        if (!payload.email || !payload.password) {
            console.error('Both email/username and password are required');
            return;
        }

        const endpoint = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(response => response.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                if (data.user) {
                    login({
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken,
                    }, data.user);
                } else {
                    login({
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken,
                    });
                }
                navigate('/');
            } else {
                console.error(isLogin ? 'Login failed:' : 'Register failed:', data.error || data.message);
                alert((isLogin ? 'Login failed: ' : 'Register failed: ') + (data.error || data.message));
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('Error during login: ' + error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="glassmorph-bg">
                <div className="form-fields">
                    {fields.map((f, i) => {
                        const key = f.toLowerCase().replace(/\s+/g, '');
                        let inputType = "text";

                        if (f.toLowerCase().includes("password")) inputType = "password";
                        if (key === "email") inputType = "email";

                        return (
                            <div className="form-field" key={i}>
                                <label htmlFor={key}>{f}</label>
                                <input
                                    type={inputType}
                                    name={key}
                                    id={key}
                                    value={formData[key] || ''}
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    })}
                </div>

                {isLogin && <div className="forgot-password">
                    <p onClick={redirectToRegister}>
                        New User? <span>Register</span>
                    </p>
                    <p onClick={redirectToForgotPassword}>Forgot Password?</p>
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
