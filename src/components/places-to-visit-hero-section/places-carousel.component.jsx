import React from "react";
import './places-carousel.styles.css'
import Chennai from '../../assets/img/chennai.png'
import Coimbatore from '../../assets/img/coimbatore.png'
import Madurai from '../../assets/img/madurai.jpg'
import Trichy from '../../assets/img/trichy.png'
import Kanyakumari from '../../assets/img/hero-bg1.jpg'

const PlacesCarousel = ({ items = [], speed = 20 }) => {
  const cards = items.length ? items : [
    { title: 'Chennai', background: '#6D94C5', bgImage: Chennai },
    { title: 'Coimbatore', background: '#F2EAD3', bgImage: Coimbatore },
    { title: 'Madurai', background: '#B7A3E3', bgImage: Madurai },
    { title: 'Trichy', background: '#FBEFEF', bgImage: Trichy },
    { title: 'Kanyakumari', background: '#FFA4A4', bgImage: Kanyakumari },
    { title: 'Chennai', background: '#6D94C5', bgImage: Chennai },
    { title: 'Coimbatore', background: '#F2EAD3', bgImage: Coimbatore },
    { title: 'Madurai', background: '#B7A3E3', bgImage: Madurai },
    { title: 'Trichy', background: '#FBEFEF', bgImage: Trichy },
    { title: 'Kanyakumari', background: '#FFA4A4', bgImage: Kanyakumari }
  ];

  // duplicate items for seamless infinite scroll
  const loopItems = [...cards, ...cards];

  return (
    <div className="places-carousel">
      <div
        className="places-carousel-scroller"
        style={{ animationDuration: `${speed}s` }}
      >
        {loopItems.map((it, idx) => (
          <div className="places-carousel-item" key={idx}>
            <div className="places-carousel-card" style={{ backgroundImage: `url(${it.bgImage})` }}>
                <div className="places-carousel-overlay" style={{background: it.background}}></div>
              <div className="places-carousel-card-title">{it.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesCarousel;
