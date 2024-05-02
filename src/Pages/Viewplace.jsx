import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { GrMapLocation } from "react-icons/gr";

import './Viewplace.scss'
const Viewplace = () => {
    const place = JSON.parse(localStorage.getItem('selectedPlace'));
    
    const openGoogleMap = (latitude, longitude) => {
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(url, '_blank');
    };

  return (
    <>
      <Navbar />
      <div className="place-details">
          <img src={place.image} alt={place.title} />
          <div className="details">
            <h2>{place.title}</h2>
            <p>{place.description}</p>
            <p>Location: {place.city}</p>
          </div>
          <button className='btn flex' onClick={() => openGoogleMap(place.latitude, place.longitude)}>Map<GrMapLocation className='icon' /> </button>
        </div>
      <Footer />
   
  </>
  )
}

export default Viewplace