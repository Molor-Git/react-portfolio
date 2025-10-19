import React from 'react';
import { Link } from 'react-router-dom';
import Experience from '../components/experience/Experience';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

const ExperiencePage = () => {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', paddingTop: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Link to="/" style={{ 
            display: 'inline-block',
            color: 'var(--color-primary)',
            textDecoration: 'none',
            fontSize: '1.1rem'
          }}>
            ← Back to Home
          </Link>
        </div>
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default ExperiencePage;