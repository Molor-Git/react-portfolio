import React from 'react';
import About from '../components/about/About';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import ParticleBackground from '../components/ParticleBackground';

const AboutPage = () => {
  return (
    <>
      <ParticleBackground />
      <Nav />
      <main style={{ minHeight: '100vh', paddingTop: '6rem' }}>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;