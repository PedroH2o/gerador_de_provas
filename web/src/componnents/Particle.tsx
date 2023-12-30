import ConfettiExplosion from 'react-confetti-explosion';

export function Particle() {
  return <ConfettiExplosion
        className='absolute z-10 w-full top-0 left-1/2' 
        force={0.8}
        duration={3000}
        particleCount={250}
        width={1600}
    />;
}