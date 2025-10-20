import React, { useState, useEffect } from 'react';
import ParticleBackground from '../ParticleBackground';
import './admin.css';

const AdminAuth = ({ onAuthSuccess, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  // Admin credentials - In production, use environment variables or secure backend
  const ADMIN_CREDENTIALS = {
    username: 'Mongolhuu',
    password: 'M@shnuut$ug1985secure' // Change this to a secure password
  };

  // Check for existing authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem('portfolioAdminAuth');
      if (authData) {
        try {
          const { timestamp, authenticated } = JSON.parse(authData);
          const now = new Date().getTime();
          const authAge = now - timestamp;
          
          // Authentication expires after 24 hours
          if (authAge < 24 * 60 * 60 * 1000 && authenticated) {
            setIsAuthenticated(true);
            if (onAuthSuccess) onAuthSuccess();
          } else {
            localStorage.removeItem('portfolioAdminAuth');
          }
        } catch (error) {
          localStorage.removeItem('portfolioAdminAuth');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [onAuthSuccess]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      const authData = {
        authenticated: true,
        timestamp: new Date().getTime()
      };
      localStorage.setItem('portfolioAdminAuth', JSON.stringify(authData));
      setIsAuthenticated(true);
      setShowLogin(false);
      if (onAuthSuccess) onAuthSuccess();
    } else {
      setError('Invalid credentials. Please try again.');
      setCredentials({ username: '', password: '' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('portfolioAdminAuth');
    setIsAuthenticated(false);
    setShowLogin(false);
    setCredentials({ username: '', password: '' });
    setError('');
  };

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  if (isLoading) {
    return (
      <div className="admin-loading">
        <ParticleBackground />
        <div className="loading-spinner"></div>
        <p>Checking authentication...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-auth-container">
        <ParticleBackground />
        <div className="admin-auth-content">
          {!showLogin ? (
            <div className="admin-prompt">
              <h3>Portfolio Administration</h3>
              <p>Admin access required to manage portfolio content.</p>
              <button 
                className="btn btn-primary admin-login-btn"
                onClick={() => setShowLogin(true)}
              >
                Admin Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="admin-login-form">
              <h3>Admin Login</h3>
              {error && <div className="admin-error">{error}</div>}
              
              <div className="admin-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter admin username"
                />
              </div>
              
              <div className="admin-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter admin password"
                />
              </div>
              
              <div className="admin-actions">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <button 
                  type="button" 
                  className="btn"
                  onClick={() => setShowLogin(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-authenticated">
      <ParticleBackground />
      <div className="admin-header">
        <div className="admin-status">
          <span className="admin-badge">Admin Mode</span>
          <span className="admin-user">Logged in as: {ADMIN_CREDENTIALS.username}</span>
        </div>
        <button className="btn admin-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {children}
    </div>
  );
};

export default AdminAuth;