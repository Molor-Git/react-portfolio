import React from "react";
import { useParams, Link } from "react-router-dom";

const humanize = (slug = "") =>
  slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

const SkillPage = () => {
  const { slug } = useParams();
  const title = humanize(slug || "");

  return (
    <main style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
      <Link to="/" style={{ display: "inline-block", marginBottom: "1rem" }}>← Back</Link>
      <h1>{title}</h1>
      <p className="text-light">Placeholder page for <strong>{title}</strong>. Add your details, projects, links, code samples, and any relevant evidence for this skill here.</p>

      {/* Example sections you can fill later */}
      <section>
        <h2>Overview</h2>
        <p>Short summary about the skill.</p>
      </section>

      <section>
        <h2>Projects & Examples</h2>
        <ul>
          <li>Project 1 — short description and links</li>
          <li>Project 2 — short description and links</li>
        </ul>
      </section>

      <section>
        <h2>Tools / Technologies</h2>
        <p>List relevant tools, libraries, certificates, etc.</p>
      </section>
    </main>
  );
};

export default SkillPage;