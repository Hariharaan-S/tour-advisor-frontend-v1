import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Loader = ({ active = false, onComplete }) => {
  const [progress, setProgress] = useState(10);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!active) return undefined;

    setCompleted(false);
    setProgress(10);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90;
        const increment = Math.floor(Math.random() * 2) + 1;
        const next = prev + increment;
        return next > 90 ? 90 : next;
      });
    }, Math.floor(Math.random() * 400) + 700);

    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    if (active) return undefined;

    if (progress < 100) {
      const fillTimeout = setTimeout(() => setProgress(100), 200);
      return () => clearTimeout(fillTimeout);
    }

    if (progress >= 100 && !completed) {
      const doneTimeout = setTimeout(() => {
        setCompleted(true);
        onComplete?.();
      }, 180);
      return () => clearTimeout(doneTimeout);
    }

    return undefined;
  }, [active, progress, completed, onComplete]);

  return (
    <section
      aria-live="polite"
      aria-label="Generating your travel plan"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        width: '100%',
        height: '35vh',
        padding: '1.4rem 1rem',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ width: '100%', textAlign: 'center', minHeight: '3.5rem' }}>
        <TypeAnimation
          sequence={[
            'Finding the best places for your trip…',
            1200,
            'Optimizing routes and travel time…',
            1200,
            'Balancing your budget smartly…',
            1200,
            'Planning your day-to-day itinerary…',
            1200,
            'Finalizing your personalized itinerary…',
            1200,
          ]}
          wrapper="div"
          speed={70}
          style={{
            fontSize: '1.18rem',
            fontWeight: 600,
            color: '#0f172a',
            lineHeight: 1.5,
            minHeight: '3.5rem',
          }}
          repeat={Infinity}
        />
      </div>

      <div
        style={{
          width: '100%',
          background: 'rgba(15, 23, 42, 0.06)',
          borderRadius: '999px',
          padding: '6px',
          boxShadow: 'inset 0 1px 2px rgba(15,23,42,0.08)',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '14px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #4f46e5, #22c55e)',
            boxShadow: '0 10px 30px rgba(79,70,229,0.18)',
            transition: 'width 220ms ease-out',
          }}
        />
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.95rem',
          color: '#475569',
        }}
      >
        <span>{Math.min(progress, 100)}%</span>
        <span>Building your plan with AI-powered precision</span>
      </div>
    </section>
  );
};

export default Loader;
