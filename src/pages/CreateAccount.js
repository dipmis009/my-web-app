import React, { useState } from 'react';
import './CreateAccount.css'; // Import the dedicated CSS file

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="ca-container">
      <div className="ca-header">
        <h1 className="ca-title">Create your<br />PopX account</h1>
      </div>
      
      <form className="ca-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="ca-form-group">
          <label htmlFor="fullName" className="ca-label required">Full Name</label>
          <input
            className="ca-input"
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>
        
        {/* Phone Number */}
        <div className="ca-form-group">
          <label htmlFor="phone" className="ca-label required">Phone number</label>
          <input
            className="ca-input"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            required
          />
        </div>
        
        {/* Email Address */}
        <div className="ca-form-group">
          <label htmlFor="email" className="ca-label required">Email address</label>
          <input
            className="ca-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="marry@example.com"
            required
          />
        </div>
        
        {/* Password */}
        <div className="ca-form-group">
          <label htmlFor="password" className="ca-label required">Password</label>
          <input
            className="ca-input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            minLength="8"
          />
        </div>
        
        {/* Company Name */}
        <div className="ca-form-group">
          <label htmlFor="company" className="ca-label">Company name</label>
          <input
            className="ca-input"
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="XYZ pvt. ltd."
          />
        </div>
        
        {/* Agency Selection */}
        <div className="ca-form-group">
          <span className="ca-label required">Are you an Agency?</span>
          <div className="ca-radio-group">
            <label className="ca-radio-option">
              <input
                className="ca-radio"
                type="radio"
                name="isAgency"
                value="true"
                checked={formData.isAgency === true}
                onChange={() => setFormData({...formData, isAgency: true})}
                required
              />
              Yes
            </label>
            <label className="ca-radio-option">
              <input
                className="ca-radio"
                type="radio"
                name="isAgency"
                value="false"
                checked={formData.isAgency === false}
                onChange={() => setFormData({...formData, isAgency: false})}
              />
              No
            </label>
          </div>
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="ca-submit-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;