import { useState} from 'react'
import './Navbar.scss'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {

    const [location, setLocation] = useState(null);

    const handleGetLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
  

   const [active,setActive]= useState('navBar');
   const showNav=()=>{
    setActive('navBar activeNavbar')
   }
   const removeNavbar=()=>{
    setActive('navBar')
   }
  return (
    <section className='navBarSection' >
        <header className="header flex">
            <div className="logoDiv">
                <a href="/" className="logo flex">
                    <h1><MdOutlineTravelExplore className="icon"/> Travelon.</h1> </a>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="home" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">About</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">Pages</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">News</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">Contact</a>
                    </li>

                        <button onClick={handleGetLocation} className="btn">
                            Get Location
                        </button>
                          
                {location && (
                 <div>
                Latitude: {location.latitude}, Longitude: {location.longitude}
                 </div>
                )}
   
                </ul>
                <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon' />
                </div>
            </div>
            <div onClick={showNav} className="toggleNavBar">
            <TbGridDots className='icon' />
            </div>


        </header>
    </section >
  )
}

export default Navbar