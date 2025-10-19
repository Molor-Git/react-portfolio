import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__content">
                    <p> 
                        I protect systems by day and build them by night. With a blend of <strong>Google Cybersecurity training</strong> and 
                        <strong> full-stack development skills</strong> (thanks to Coding Dojo), I bridge the gap between security and software engineering. 
                        My mission: design secure, resilient systems that stand up to modern threats.
                    </p>

                    <Link to="/contact" className="btn btn-primary">
                        Let's Talk
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
