import {useState,useEffect} from 'react'
import './Home.scss'
import video from '../../Assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

        const [rangeValue, setRangeValue] = useState(50); 
      
        const handleRangeChange = (event) => {
          setRangeValue(event.target.value);
        };
    useEffect(()=>
   {
    Aos.init({duration:2000})
   },[])
  return (
    <section className='home'>
         <div className="overlay">
         </div>
         <video src={video} muted autoPlay loop type="video/mp4" ></video>
        <div className="homeContent container">
            <div className="textDiv">
                
               
                <h1 data-aos="fade-up" className="homeTitle">Search your Holiday</h1>
            </div>
            <div data-aos="fade-up" className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search your destintion:</label>
                    <div className="input flex"> 
                    <input type="text"placeholder='Enter place here....' />
                    <GrLocation className='icon' />
                    </div>
                </div>

                <div className="priceInput">
                    <div className="label_total flex">
                    <label htmlFor="price">Select the Distance</label>

                    </div>
                    
                    <div className="input flex"> 
                    <input  type="range" max="200" min="1" value={rangeValue} onChange={handleRangeChange} />
                    <output>{rangeValue}km</output>
                    </div>
                </div>
                <div className="searchOptions flex">
                <HiFilter className='icon' />
                <span>More Filters</span>
                </div>
            </div>

            <div data-aos="fade-up" className="homeFooterIcons flex">
                <div className="rightIcons">
                <FiFacebook className='icon' />
                <BsInstagram className='icon' />
                </div>
                <div className="leftIcons">
                <BsListTask className='icon' />
                <TbApps className='icon' />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Home