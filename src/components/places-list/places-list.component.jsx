import React from "react";
import './places-list.styles.css';

const PlacesList = () => {
    return (
        <div className="must-visit-destinations">
            <h2>Must-Visit Destinations</h2>
            <div className="places-to-visit-wrapper">
                <div className="places-container">
                    <div className="places-overlay"><p>Chennai</p></div>
                    <img src="img/chennai.png" alt="" />
                </div>
                <div className="places-container">
                    <div className="places-overlay"><p>Chennai</p></div>
                    <img src="img/chennai.png" alt="" />
                </div>
                <div className="places-container">
                    <div className="places-overlay"><p>Chennai</p></div>
                    <img src="img/chennai.png" alt="" />
                </div>
                <div className="places-container">
                    <div className="places-overlay"><p>Chennai</p></div>
                    <img src="img/chennai.png" alt="" />
                </div>
            </div>
        </div>

    );
}
export default PlacesList;