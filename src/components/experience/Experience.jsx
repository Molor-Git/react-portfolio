import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import BADGE from "../../assets/google-cybersecurity-professional-certificate-v2.png"

const Experience = () => {
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
								<h4>Authentication</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Linux</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Cybersecurity Assessment</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Information Assurance</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>SQL</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Information Security</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Information Systems</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Intrusion Detection and IDS tools</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Network Analyzer (sniffing) tools</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Network Security</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>NIST Cybersecurity Framework</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Python</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Risk Assessment</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Risk Management Framework</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Threat Analysis</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Vulnerability Assessment</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Security Information and Event Management (SIEM) tools</h4>
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
								<h4>HTML/CSS</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Javascript</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Tailwind</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>React</h4>
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
								<h4>Node JS</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>npm</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Python</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>socket.io</h4>
								<small className="text-light"></small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Flask</h4>
								<small className="text-light"></small>
							</div>
						</article>
					</div>
				</div>
				{/* END OF BACKEND */}
			</div>
		</section>
	);
};

export default Experience;
