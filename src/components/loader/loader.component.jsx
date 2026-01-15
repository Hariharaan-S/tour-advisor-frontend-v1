import { TypeAnimation } from 'react-type-animation';

const Loader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <div style={{ fontSize: '3em', animation: 'pulse 2s infinite' }}>⏳</div>
      <TypeAnimation
        sequence={[
          'Finding the best places for your trip…',
          800,
          'Optimizing routes and travel time…',
          800,
          'Balancing your budget smartly…',
          800,
          'Planning your day from 9:30 AM to 6:00 PM…',
          800,
          'Finalizing your personalized itinerary…',
          800
        ]}
        wrapper="span"
        speed={75}
        style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: '300', textAlign: 'center' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Loader;