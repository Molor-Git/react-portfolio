import React from "react";
import "./about.css";
import ME from "../../assets/kali-blue-sticker-modified.png";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About_Image" />
						{/* <img src={GOOGLE-BADGE} alt="About_Image" /> */}
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1+ Years</small>
						</article>

						{/* <article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>100+ Worldwide</small>
						</article> */}

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>10+ Completed</small>
						</article>
					</div>

					<p> 
						I protect systems by day and build them by night. With a blend of **Google Cybersecurity training** and 
						**full-stack development skills** (thanks to Coding Dojo), I bridge the gap between security and software engineering. 
						My mission: design secure, resilient systems that stand up to modern threats.  
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
