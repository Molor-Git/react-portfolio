import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/Fintechtocat.png'
import IMG2 from '../../assets/Fintechtocat.png'
import IMG3 from '../../assets/Fintechtocat.png'
import IMG4 from '../../assets/Fintechtocat.png'
import IMG5 from '../../assets/Fintechtocat.png'
import IMG6 from '../../assets/Fintechtocat.png'


// DO NOT USE COPYRIGHTED IMAGES IN PRODUCTION

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Crypto Currency Dashboard & Financial Visualization",
		github: "https://github.com",
		// demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization/attachments/11711155?mode=media",
	},
	{
		id: 2,
		image: IMG2,
		title: "Charts templates & infographics in Figma",
		github: "https://github.com",
		// demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/11605458?mode=media",
	},
	{
		id: 3,
		image: IMG3,
		title: "Figma dashboard UI kit for data design web apps",
		github: "https://github.com",
		// demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps/attachments/12402865?mode=media",
	},
	{
		id: 4,
		image: IMG4,
		title: "Maintaining tasks and tracking progress",
		github: "https://github.com",
		// demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress/attachments/12029571?mode=media",
	},
	{
		id: 5,
		image: IMG5,
		title: "Charts templates infographics in Figma",
		github: "https://github.com",
		// demo: "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/11561679?mode=media",
	},
	{
		id: 6,
		image: IMG6,
		title: "Charts templates infographics in Figma",
		github: "https://github.com",
		// demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/7714686?mode=media",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{
					data.map(({id, image, title, github, demo}) => {
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-image">
									<img
										src={image}
										alt=""
									/>
								</div>
								<h3>{title}</h3>
								<div className="portfolio__item-cta">
									<a
										href={github}
										className="btn"
										target="_blank"
										rel="noreferrer"
									>
										Github
									</a>
									{/* <a
										href={demo}
										className="btn btn-primary"
										target={data}
									>
										Live Demo
									</a> */}
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
	);
};

export default Portfolio;
