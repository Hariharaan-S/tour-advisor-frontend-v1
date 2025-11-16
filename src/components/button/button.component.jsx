import React from "react";
import './button.styles.css'

const buttonTypes = {
    'login': 'login',
    'register': 'register',
    'default': 'default'
}

const Button = ({ buttonType, buttonValue, customStyle }) => {
    return (
        <button style={{ ...customStyle }} className={buttonTypes[buttonType]} type="submit">{buttonValue}</button>
    )
}

export default Button;