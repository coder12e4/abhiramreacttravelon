import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './Viewplace.scss'
const Viewplace = () => {
    const place = JSON.parse(localStorage.getItem('selectedPlace'));

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
        </div>
      <Footer />
   
  </>
  )
}

export default Viewplace