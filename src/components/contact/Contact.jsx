import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
// import { BsWhatsapp } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_8nuj4gn', 'template_8xbadub', form.current, 'oI594lBgGgxnRvYQg')
			.then((result) => {
					console.log(result.text);
			}, (error) => {
					console.log(error.text);
			});
		e.target.reset()
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						{/* <h5>dev.molor@gmail.com</h5> */}
						<a
							href="mailto:dev.molor@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					{/* <article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>+123456789</h5>
						<a
							href="https://api.whatsapp.com/send?phone=+"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article> */}
					<article className="contact__option">
						<SlSocialTwitter className="contact__option-icon" />
						<h4>Twitter</h4>
						{/* <h5>Molorerdene</h5> */}
						<a
							href="https://twitter.com/@molor__erdene"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail} >
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
