import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Welcome = () => {
  return (
    <div className="welcome-mobile-container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <div className="welcome-text">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipiscing elit.</p>
        </div>
      </div>
      
      <div className="welcome-actions">
        <Link to="/create-account" className="welcome-btn primary-btn">
          Create Account
        </Link>
        <Link to="/login" className="welcome-btn login-btn">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Welcome;