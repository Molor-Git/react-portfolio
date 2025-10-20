import React from 'react';
import Portfolio from '../components/portfolio/Portfolio';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import ParticleBackground from '../components/ParticleBackground';

const PortfolioPage = () => {
  return (
    <>
      <ParticleBackground />
      <Nav />
      <main style={{ minHeight: '100vh', paddingTop: '6rem' }}>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;