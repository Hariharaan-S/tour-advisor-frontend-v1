import React from "react";
import './places-carousel.styles.css'

const PlacesCarousel = ({ items = [], speed = 20 }) => {
  const cards = items.length ? items : [
    { title: 'Chennai', background: '#6D94C5', bgImage: 'img/chennai.png' },
    { title: 'Coimbatore', background: '#F2EAD3', bgImage: 'img/coimbatore.png' },
    { title: 'Madurai', background: '#B7A3E3', bgImage: 'img/madurai.jpg' },
    { title: 'Trichy', background: '#FBEFEF', bgImage: 'img/trichy.png' },
    { title: 'Kanyakumari', background: '#FFA4A4', bgImage: 'img/hero-bg1.jpg' },
    { title: 'Chennai', background: '#6D94C5', bgImage: 'img/chennai.png' },
    { title: 'Coimbatore', background: '#F2EAD3', bgImage: 'img/coimbatore.png' },
    { title: 'Madurai', background: '#B7A3E3', bgImage: 'img/madurai.jpg' },
    { title: 'Trichy', background: '#FBEFEF', bgImage: 'img/trichy.png' },
    { title: 'Kanyakumari', background: '#FFA4A4', bgImage: 'img/hero-bg1.jpg' }
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
