import { useState } from 'react';
import './ForgotPassword.scss'; 
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    setMessage(`Code to reset your password has been sent to ${email}`);
    setEmail('');
    setError('');
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Enter your email address:</label>
          <div className="input">
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdOutlineAlternateEmail className='icon' />
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        <button type="submit" className="submit-btn">
          Reset Password <BiLogInCircle className='icon' />
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;