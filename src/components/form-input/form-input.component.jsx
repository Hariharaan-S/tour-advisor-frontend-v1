import React from "react";
import "./form-input.styles.css";

const FormInput = ({ 
    type = "text", 
    name,
    placeholder, 
    value, 
    onChange, 
    icon,
    label,
    required = false 
}) => {
    return (
        <div className="form-input-wrapper">
            {label && (
                <label className="form-input-label" htmlFor={name}>
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}
            <div className="form-input-container">
                {icon && <span className="form-input-icon">{icon}</span>}
                <input
                    type={type}
                    id={name}
                    name={name}
                    className={`form-input ${icon ? 'with-icon' : ''}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
        </div>
    );
};

export default FormInput;
