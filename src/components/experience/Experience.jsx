import React from "react";
import { Link } from "react-router-dom";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import BADGE from "../../assets/google-cybersecurity-professional-certificate-v2.png";
import CODINGDOJO from "../../assets/CodingDojo.jpg";

const slugify = (s = "") =>
  s
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const SkillItem = ({ name }) => (
  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icon" />
    <div>
      <h4>
        <Link to={`/skills/${slugify(name)}`} className="skill-link">
          {name}
        </Link>
      </h4>
      <small className="text-light"></small>
    </div>
  </article>
);

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__cybersecurity">
          <h3>Cybersecurity Analyst</h3>
          <div className="experience__content">
            <SkillItem name="Authentication" />
            <SkillItem name="Linux" />
            <SkillItem name="Cybersecurity Assessment" />
            <SkillItem name="Information Assurance" />
            <SkillItem name="SQL" />
            <SkillItem name="Information Security" />
            <SkillItem name="Information Systems" />
            <SkillItem name="Intrusion Detection and IDS tools" />
            <SkillItem name="Network Analyzer (sniffing) tools" />
            <SkillItem name="Network Security" />
            <SkillItem name="NIST Cybersecurity Framework" />
            <SkillItem name="Python" />
            <SkillItem name="Risk Assessment" />
            <SkillItem name="Risk Management Framework" />
            <SkillItem name="Threat Analysis" />
            <SkillItem name="Vulnerability Assessment" />
            <SkillItem name="Security Information and Event Management (SIEM) tools" />
          </div>

          <div className="experience__badges">
            <div className="experience__badge">
              <img
                src={BADGE}
                alt="Google Cybersecurity certificate"
                className="experience__badge-img"
              />
            </div>

            <div className="experience__badge">
              <img
                src={CODINGDOJO}
                alt="Coding Dojo certificate"
                className="experience__badge-img"
              />
            </div>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <SkillItem name="HTML/CSS" />
            <SkillItem name="Javascript" />
            <SkillItem name="Bootstrap" />
            <SkillItem name="Tailwind" />
            <SkillItem name="React" />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <SkillItem name="Node JS" />
            <SkillItem name="npm" />
            <SkillItem name="MySQL" />
            <SkillItem name="Python" />
            <SkillItem name="socket.io" />
            <SkillItem name="Flask" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
