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
      <p className="text-light">Placeholder page for <strong>{title}</strong>. Add your details here.</p>
    </main>
  );
};

export default SkillPage;