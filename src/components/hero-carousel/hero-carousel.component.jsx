import React, { useState, useEffect, useRef } from "react";
import './hero-carousel.styles.css'
import CarouselCard from "../hero-carousel-card/hero-card.component";

const data = [
    {
        id: 1,
        image: 'https://picsum.photos/id/12/1200/800',
    },
    {
        id: 2,
        image: 'https://picsum.photos/id/20/1200/800',
    },
    {
        id: 3,
        image: 'https://picsum.photos/id/30/1200/800',
    }
];

const HeroCarousel = () => {
    // add clones for seamless looping
    const slides = [...data, data[0], data[1]];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const trackRef = useRef(null);
    const pauseDuration = 3000; // 3 second pause at each image
    const scrollDuration = 550; // 2 seconds to scroll to next image

    useEffect(() => {
        const animateCarousel = async () => {
            // Scroll to next slide
            setIsPaused(false);
            trackRef.current.style.transition = `transform ${scrollDuration}ms linear`;
            trackRef.current.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

            // Wait for scroll to complete
            await new Promise(resolve => setTimeout(resolve, scrollDuration));

            // Pause at full width
            setIsPaused(true);
            await new Promise(resolve => setTimeout(resolve, pauseDuration));

            // Move to next index
            setCurrentIndex(prev => {
                const nextIndex = (prev + 1) % data.length;
                // Reset to beginning if needed for seamless looping
                if (nextIndex === 0) {
                    trackRef.current.style.transition = 'none';
                    trackRef.current.style.transform = `translateX(0)`;
                }
                return nextIndex;
            });
        };

        animateCarousel();
    }, [currentIndex]);

    return (
        <div className="hero-carousel">
            <div className="carousel-track" ref={trackRef}>
                {slides.map((item, idx) => (
                    <CarouselCard key={`slide-${idx}-${item.id}`} image={item.image} title={item.title} />
                ))}
            </div>
        </div>
    );
}

export default HeroCarousel;