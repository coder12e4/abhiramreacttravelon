import { useState,useEffect } from 'react';
import './Login.scss'
import video from '../Assets/video.mp4'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      console.log("error");
      setError('Please provide both email and password.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    setError('');
    navigate('/home')
  };
  const navigate= useNavigate()

 
useEffect(()=>
{
Aos.init({duration:2000})
},[])


  return (
    <section className='login'>
    <div className="overlay">
    </div>
    <video src={video} muted autoPlay loop type="video/mp4" ></video>
    <div className="loginContent container">
    <div className="logoDiv">
              <a href="/home" className='logo flex'><MdOutlineTravelExplore className='icon'/>Travelon.</a>
      </div>
       <div className="textDiv">
           <h1 data-aos="fade-up" className="homeTitle">Login</h1>
       </div>
       <div data-aos="fade-up" className="cardDiv grid">
           <div className="destinationInput">
               <label htmlFor="city">Enter Email</label>
               <div className="input flex"> 
               <input  type="email" placeholder='Enter Email'  value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
               <MdOutlineAlternateEmail className='icon' />
               </div>
           </div>
    
           <div className="destinationInput">
               <label htmlFor="city">Enter Password</label>
               <div className="input flex"> 
               <input  type="password" placeholder='Enter Password' value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
               <RiLockPasswordLine className='icon' />
               </div>
           </div>
           {error && <p className="error-message">{error}</p>}
           <div onClick={handleSubmit} className=" flex searchOptions">
          Login
           <BiLogInCircle className='icon' />
           </div>
       </div>
       <p className="login-link">Forgot your password? <Link to="/forgot">Reset it here</Link></p>
       <p className="login-link">Don't have an account? <Link to="/signup">Signup here</Link></p>

    </div>
    </section>
  );
};

export default Login;