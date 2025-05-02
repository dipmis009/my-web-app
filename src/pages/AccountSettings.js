import React from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
      <div className="account-header">
        <h1>Account Settings</h1>
      </div>
      
      <div className="account-content-wrapper">
      <div className="profile-section">
          <div className="profile-avatar">
          <div className="avatar-initials">MD</div>
          </div>
          <div className="profile-info">
            <h2>Marry Doe</h2>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        
        <div className="account-content">
          <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipseing</p>
          <p>Elitr. Sed Diam Nonumy Eirmod Tempor Invidunt Ut</p>
          <p>Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;