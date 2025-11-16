import React from "react";
import Button from "../button/button.component";
import "./destination-card.styles.css";

const DestinationCard = () => {
    return (
        <div className="destination-card">
            <div className="destination-image">
                <img src="img/destination-card-img.png" alt="Destination 1" />
            </div>
            <div className="package-description">
                <h2>Chennai Heritage Gateway</h2>
                <p>Chennai</p>
            </div>
            <div className="icon-row">
                <div className="icon">
                    <img src="img/car.png" alt="" srcset="" />
                    <p>3 Days, 2 Nights</p>
                </div>
                <div className="icon">
                    <img src="img/people.png" alt="" srcset="" />
                    <p>5 members</p>
                </div>
                <div className="icon">
                    <img src="img/hotel.png" alt="" srcset="" />
                    <p>Restaurents</p>
                </div>
            </div>

            <Button customStyle={{ marginTop: "2rem" }} buttonType="register" buttonValue="Make Plan" />
        </div>
    )
}

export default DestinationCard;