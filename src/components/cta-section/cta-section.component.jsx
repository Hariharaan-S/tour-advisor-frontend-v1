import React from "react";
import "./cta-section.styles.css";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
    const navigate = useNavigate();
    
    return (
        <div className="cta-section">
            <h2>Start exploring now and turn your trip into an unforgettable journey!</h2>
            <p>Looking for exciting spots to explore near your destination? From breathtaking landmarks and cultural gems to hidden treasures, we've got you covered.</p>
            <Button 
                buttonType="default" 
                buttonValue="Book your seat" 
                onClick={() => navigate('/make-plan')}
            />
        </div>
    );
};

export default CTASection;
