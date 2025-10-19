import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav style={{display:'flex', gap: '1rem', justifyContent:'center', padding:'0.5rem 0'}}>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </nav>
);

export default Nav;