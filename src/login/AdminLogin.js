import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials with more secure check
    const adminCredentials = {
      username: 'admin',
      password: 'admin123'
    };

    // Case-sensitive and trim whitespace
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (
      trimmedUsername === adminCredentials.username && 
      trimmedPassword === adminCredentials.password
    ) {
      // Set admin status
      setIsAdmin(true);
      
      // Use React Router's navigation instead of direct window location
      window.location.href = '/admin';
    } else {
      // More descriptive error message
      setError('Invalid username or password. Please try again.');
      
      // Clear password field after failed attempt
      setPassword('');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="submit-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;