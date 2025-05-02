import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Check if both fields have values
  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return; // Prevent submission if invalid
    console.log('Login data:', formData);
    // Proceed with login logic
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Sign in to your PopX account</h1>
        <p className="login-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className={`login-button ${!isFormValid ? 'disabled' : ''}`}
          disabled={!isFormValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;