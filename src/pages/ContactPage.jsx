import React from 'react';
import Contact from '../components/contact/Contact';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import ParticleBackground from '../components/ParticleBackground';

const ContactPage = () => {
  return (
    <>
      <ParticleBackground />
      <Nav />
      <main style={{ minHeight: '100vh', paddingTop: '6rem' }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;