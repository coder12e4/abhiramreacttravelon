
import {MdOutlineTravelExplore} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import './welcome.css';
import { useState } from 'react';

const WelcomePage = () => {

  const [split, setSplit] = useState(false);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        setSplit(true);
      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );
  };
  const navigate=useNavigate()
  const animationProps = useSpring({
    from: { marginTop: '-100vh' },
    to: { marginTop: '40vh' },
    config: { tension: 100, friction: 10 },
  });

  return (
    <>
    
     <animated.div style={animationProps} className="welcome-page">
     <h1 className='logos'><MdOutlineTravelExplore className="icons"/> Travelon.</h1>
      <h2>Explore neaby with us.</h2>
      <div className="button-container">
      {!split ? (
        <button onClick={handleGetLocation}>Get Location</button>
      ) : (
        <>
          <button onClick={()=>navigate('/home')}>Home</button>
       
          <button onClick={()=>navigate('/login')}>Login</button>
          </>
        )}
      </div>
    </animated.div>
    </>
   
  );
};

export default WelcomePage;



