import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <div className="nav__menu">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          <span className="nav__icon">⌂</span>
          <span className="nav__text">Home</span>
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === '/about' ? 'active' : ''}
        >
          <span className="nav__icon">∷</span>
          <span className="nav__text">About</span>
        </Link>
        <Link 
          to="/experience" 
          className={location.pathname === '/experience' ? 'active' : ''}
        >
          <span className="nav__icon">◈</span>
          <span className="nav__text">Skills</span>
        </Link>
        <Link 
          to="/portfolio" 
          className={location.pathname === '/portfolio' ? 'active' : ''}
        >
          <span className="nav__icon">▣</span>
          <span className="nav__text">Work</span>
        </Link>
        <Link 
          to="/contact" 
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          <span className="nav__icon">✉</span>
          <span className="nav__text">Contact</span>
        </Link>
        <Link 
          to="/admin" 
          className={`nav__admin ${location.pathname === '/admin' ? 'active' : ''}`}
          title="Admin Panel"
        >
          <span className="nav__icon">⚙</span>
          <span className="nav__text">Admin</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;