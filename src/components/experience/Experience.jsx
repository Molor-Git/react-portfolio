<<<<<<< HEAD
import React, { useEffect } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import BADGE from "../../assets/google-cybersecurity-professional-certificate-v2.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'

const slugify = (str) =>
	str
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, ''); // Remove non-word characters (keep letters, numbers, underscore, hyphen)

const Experience = () => {
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const showSection = location.state?.showSection
		if (showSection === 'cybersecurity') {
			// add class to the cybersecurity container so it becomes visually prominent
			const sec = document.querySelector('.experience__cybersecurity')
			if (sec) {
				sec.classList.add('focused-section')
				sec.focus?.()
				setTimeout(() => sec.classList.remove('focused-section'), 3000)
			}
			// clear the state so it doesn't trigger repeatedly
			try { navigate(location.pathname, { replace: true, state: {} }) } catch (e) {}
		}
	}, [location.state?.showSection, navigate, location.pathname])

	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__cybersecurity">
					<h3>Cybersecurity Analyst </h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Authentication')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Authentication')}`} state={{ skillId: `skill-${slugify('Authentication')}` }} className="experience__link">Authentication</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Linux')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Linux')}`} state={{ skillId: `skill-${slugify('Linux')}` }} className="experience__link">Linux</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Cybersecurity Assessment')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Cybersecurity Assessment')}`} state={{ skillId: `skill-${slugify('Cybersecurity Assessment')}` }} className="experience__link">Cybersecurity Assessment</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Information Assurance')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Information Assurance')}`} state={{ skillId: `skill-${slugify('Information Assurance')}` }} className="experience__link">Information Assurance</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('SQL')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('SQL')}`} state={{ skillId: `skill-${slugify('SQL')}` }} className="experience__link">SQL</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Information Security')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Information Security')}`} state={{ skillId: `skill-${slugify('Information Security')}` }} className="experience__link">Information Security</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Information Systems')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Information Systems')}`} state={{ skillId: `skill-${slugify('Information Systems')}` }} className="experience__link">Information Systems</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Intrusion Detection and IDS tools')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Intrusion Detection and IDS tools')}`} state={{ skillId: `skill-${slugify('Intrusion Detection and IDS tools')}` }} className="experience__link">Intrusion Detection and IDS tools</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Network Analyzer (sniffing) tools')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Network Analyzer (sniffing) tools')}`} state={{ skillId: `skill-${slugify('Network Analyzer (sniffing) tools')}` }} className="experience__link">Network Analyzer (sniffing) tools</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Network Security')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Network Security')}`} state={{ skillId: `skill-${slugify('Network Security')}` }} className="experience__link">Network Security</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('NIST Cybersecurity Framework')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('NIST Cybersecurity Framework')}`} state={{ skillId: `skill-${slugify('NIST Cybersecurity Framework')}` }} className="experience__link">NIST Cybersecurity Framework</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Python')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Python')}`} state={{ skillId: `skill-${slugify('Python')}` }} className="experience__link">Python</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Risk Assessment')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Risk Assessment')}`} state={{ skillId: `skill-${slugify('Risk Assessment')}` }} className="experience__link">Risk Assessment</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Risk Management Framework')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Risk Management Framework')}`} state={{ skillId: `skill-${slugify('Risk Management Framework')}` }} className="experience__link">Risk Management Framework</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Threat Analysis')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Threat Analysis')}`} state={{ skillId: `skill-${slugify('Threat Analysis')}` }} className="experience__link">Threat Analysis</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Vulnerability Assessment')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Vulnerability Assessment')}`} state={{ skillId: `skill-${slugify('Vulnerability Assessment')}` }} className="experience__link">Vulnerability Assessment</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Security Information and Event Management (SIEM) tools')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Security Information and Event Management (SIEM) tools')}`} state={{ skillId: `skill-${slugify('Security Information and Event Management (SIEM) tools')}` }} className="experience__link">Security Information and Event Management (SIEM) tools</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
					</div>
					<div className="badge">
						<div>
							<img src={BADGE} alt="Badge-Icon"/>
						</div>
					</div>	
				</div>
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('HTML/CSS')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('HTML/CSS')}`} state={{ skillId: `skill-${slugify('HTML/CSS')}` }} className="experience__link">HTML/CSS</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Javascript')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Javascript')}`} state={{ skillId: `skill-${slugify('Javascript')}` }} className="experience__link">Javascript</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Bootstrap')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Bootstrap')}`} state={{ skillId: `skill-${slugify('Bootstrap')}` }} className="experience__link">Bootstrap</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Tailwind')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('Tailwind')}`} state={{ skillId: `skill-${slugify('Tailwind')}` }} className="experience__link">Tailwind</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('React')}`} tabIndex={-1}>
									<Link to={`/skills/${slugify('React')}`} state={{ skillId: `skill-${slugify('React')}` }} className="experience__link">React</Link>
								</h4>
								<small className="text-light"></small>
							</div>
						</article>
					</div>
				</div>
				{/* END OF FRONTEND */}

				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Node JS')}`} tabIndex={-1}><Link to={`/skills/${slugify('Node JS')}`} state={{ skillId: `skill-${slugify('Node JS')}` }} className="experience__link">Node JS</Link></h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('npm')}`} tabIndex={-1}><Link to={`/skills/${slugify('npm')}`} state={{ skillId: `skill-${slugify('npm')}` }} className="experience__link">npm</Link></h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('MySQL')}`} tabIndex={-1}><Link to={`/skills/${slugify('MySQL')}`} state={{ skillId: `skill-${slugify('MySQL')}` }} className="experience__link">MySQL</Link></h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Python')}`} tabIndex={-1}><Link to={`/skills/${slugify('Python')}`} state={{ skillId: `skill-${slugify('Python')}` }} className="experience__link">Python</Link></h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('socket.io')}`} tabIndex={-1}><Link to={`/skills/${slugify('socket.io')}`} state={{ skillId: `skill-${slugify('socket.io')}` }} className="experience__link">socket.io</Link></h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4 id={`skill-${slugify('Flask')}`} tabIndex={-1}><Link to={`/skills/${slugify('Flask')}`} state={{ skillId: `skill-${slugify('Flask')}` }} className="experience__link">Flask</Link></h4>
								<small className="text-light"></small>
							</div>
						</article>
					</div>
				</div>
				{/* END OF BACKEND */}
			</div>
		</section>
	);
=======
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
>>>>>>> 746ed310d015ed966efd93e63c50c046623bc0c8
};

export default Experience;
