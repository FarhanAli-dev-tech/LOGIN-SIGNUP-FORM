// components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      onLogin(matchedUser);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="form-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
        <p>
          Don't have an account?{' '}
          <button type="button" onClick={onSwitch}>Signup</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
