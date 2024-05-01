import { useState, useEffect } from 'react';
import './SignUp.scss';
import video from '../Assets/video.mp4';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiLogInCircle } from 'react-icons/bi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import 'aos/dist/aos.css';
import Aos from 'aos';


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [address, setAddress] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Blood Group:', bloodGroup);
    console.log('Address:', address);
    console.log('Job:', job);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setBloodGroup('');
    setAddress('');
    setJob('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="login">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="loginContent container">
        <div className="logoDiv">
          <a href="/home" className="logo flex">
            <MdOutlineTravelExplore className="icon" />
            Travelon.
          </a>
        </div>
        <div className="textDiv">
          <h1 data-aos="fade-up" className="homeTitle">
            Sign Up
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="firstName">First Name</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
               <MdDriveFileRenameOutline className='icon'/>

            </div>
          </div>
          <div className="destinationInput">
            <label htmlFor="lastname">Last Name</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <MdDriveFileRenameOutline className='icon'/>
            </div>
          </div>

          <div className="destinationInput">
            <label htmlFor="email">Enter Email</label>
            <div className="input flex">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MdOutlineAlternateEmail className="icon" />
            </div>
          </div>

          <div className="destinationInput">
            <label htmlFor="password">Enter Password</label>
            <div className="input flex">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
              <RiLockPasswordLine className="icon" />
            </div>
          </div>
          <div className="destinationInput">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input flex">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <RiLockPasswordLine className="icon" />
            </div>
          </div>
          <div className="destinationInput">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <div className="input flex">
               <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required />
                  </div>
                  
                </div>

                <div className="destinationInput">
                <label htmlFor="address">Address</label>
                <div className="input flex">
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <MdOutlineHomeWork className='icon'/>
                </div>
              </div>
              <div className="destinationInput">
                <label htmlFor="job">Job</label>
                <div className="input flex">
                  <input
                    type="text"
                    id="job"
                    placeholder="Enter Job"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    required
                  />
                  <MdOutlineWorkOutline className='icon'/>
                </div>
              </div>

              <div className="destinationInput">
                <label htmlFor="bloodGroup">Blood Group</label>
                <div className="input flex">
                  <select
                    id="bloodGroup"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    required>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <BiDonateBlood className='icon' />

                </div>
              </div>
          <div onClick={handleSubmit} className=" flex searchOptions">
            Sign up
            <BiLogInCircle className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
