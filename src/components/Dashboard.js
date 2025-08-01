// components/Dashboard.js
import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="form-box">
      <h2>Welcome, {user.fullName || 'User'}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
