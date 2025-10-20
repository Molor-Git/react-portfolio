import React from 'react';
import Experience from '../components/experience/Experience';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import ParticleBackground from '../components/ParticleBackground';

const ExperiencePage = () => {
  return (
    <>
      <ParticleBackground />
      <Nav />
      <main style={{ minHeight: '100vh', paddingTop: '6rem' }}>
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default ExperiencePage;