import React from "react";
import './button.styles.css'

const buttonTypes = {
    'login': 'login',
    'register': 'register',
    'default': 'default'
}

const Button = ({ buttonType, buttonValue, customStyle, onClick, type = "submit" }) => {
    return (
        <button style={{ ...customStyle }} className={buttonTypes[buttonType]} type={type} onClick={onClick}>{buttonValue}</button>
    )
}

export default Button;