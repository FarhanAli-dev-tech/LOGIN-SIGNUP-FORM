// components/Signup.js
import React, { useState } from 'react';

const Signup = ({ onSignup, onSwitch }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!fullName.trim()) validationErrors.fullName = 'Full name is required';
    if (!email.includes('@')) validationErrors.email = 'Invalid email format';
    if (password.length < 6) validationErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
      setErrors({ email: 'Email already registered' });
      return;
    }

    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    onSignup(newUser);
  };

  return (
    <div className="form-box">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>Full Name:</label>
        <input 
          type="text" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          required 
        />
        {errors.fullName && <div className="error">{errors.fullName}</div>}

        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <label>Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

        <button type="submit">Signup</button>
        <p>
          Already have an account?{' '}
          <button type="button" onClick={onSwitch}>Login</button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
