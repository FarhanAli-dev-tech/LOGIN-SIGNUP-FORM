// App.js
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setCurrentUser(null);
  };

  return (
    <div className="app-container">
      {currentUser ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        isLogin ? (
          <Login onLogin={handleLogin} onSwitch={() => setIsLogin(false)} />
        ) : (
          <Signup onSignup={handleLogin} onSwitch={() => setIsLogin(true)} />
        )
      )}
    </div>
  );
}

export default App;
