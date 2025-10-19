import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  
  return (
    <nav style={{display:'flex', gap: '1rem', justifyContent:'center', padding:'0.5rem 0'}}>
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active' : ''}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={location.pathname === '/about' ? 'active' : ''}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        About
      </Link>
      <Link 
        to="/experience" 
        className={location.pathname === '/experience' ? 'active' : ''}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        Experience
      </Link>
      <Link 
        to="/portfolio" 
        className={location.pathname === '/portfolio' ? 'active' : ''}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        Portfolio
      </Link>
      <Link 
        to="/contact" 
        className={location.pathname === '/contact' ? 'active' : ''}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;