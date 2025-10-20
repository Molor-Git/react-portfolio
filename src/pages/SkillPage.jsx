import React from "react";
import { useParams, Link } from "react-router-dom";
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import ParticleBackground from '../components/ParticleBackground';

const humanize = (slug = "") =>
  slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

const SkillPage = () => {
  const { slug } = useParams();
  const title = humanize(slug || "");

  return (
    <>
      <ParticleBackground />
      <Nav />
      <main style={{ 
        padding: "2rem", 
        maxWidth: 900, 
        margin: "0 auto", 
        minHeight: "100vh",
        paddingTop: "8rem"
      }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link 
            to="/experience" 
            style={{ 
              display: "inline-block", 
              marginBottom: "1rem",
              color: 'var(--color-primary)',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}
          >
            ← Back to Experience
          </Link>
        </div>
        <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{title}</h1>
        <p className="text-light">
          Placeholder page for <strong>{title}</strong>. Add your details here.
        </p>
        
        <div style={{ 
          background: 'var(--color-bg-variant)', 
          padding: '2rem', 
          borderRadius: '1rem',
          marginTop: '2rem'
        }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
            About {title}
          </h3>
          <p style={{ color: 'var(--color-light)' }}>
            This is where you can add detailed information about your {title.toLowerCase()} skills, 
            experience, projects, and achievements.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SkillPage;