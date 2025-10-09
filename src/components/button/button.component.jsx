import React from "react";
import './button.styles.css'

const buttonTypes = {
    'login': 'login',
    'register': 'register'
}

const Button = ({ buttonType, buttonValue }) => {
    return (
        <button className={buttonTypes[buttonType]} type="submit">{buttonValue}</button>
    )
}

export default Button;