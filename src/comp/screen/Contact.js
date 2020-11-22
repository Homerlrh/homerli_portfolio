import React from "react";
import Links from "../links/Links";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faFacebookSquare,
	faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
	const handleEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_08ckf0o",
				"template_bz7rtgj",
				e.target,
				"user_D73Bb16ivcWsaERtwsRz0"
			)
			.then(
				function (response) {
					alert("I will get back to you ASAP, Thanks");
				},
				function (error) {
					alert("Please try again later");
				}
			);
		e.target.reset();
	};
	return (
		<div className="main">
			<h1>Contact Me</h1>
			<div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
				<div style={{ width: "60%" }}>
					<form className="emailGroup" onSubmit={handleEmail}>
						<div>
							<label>Subject: </label>
							<input
								type="text"
								placeholder="subject"
								name="subject"
								autoComplete="off"
							/>
						</div>
						<div>
							<label>Email: </label>
							<input
								type="email"
								placeholder="ex. test@test.com"
								name="email"
								autoComplete="off"
							/>
						</div>
						<div>
							<label>Name: </label>
							<input
								type="text"
								placeholder="ex. John Doe"
								name="name"
								autoComplete="off"
							/>
						</div>
						<div>
							<label>Message: </label>
							<textarea
								type="text"
								placeholder="message"
								name="message"
								autoComplete="off"
								rows="10"
							/>
						</div>
						<div style={{ display: "flex", justifyContent: "flex-end" }}>
							<input type="submit" value="Email Me" className="demoBtn" />
						</div>
					</form>
				</div>
				<Links page="contact" />
			</div>
			<div className="contactGroup">
				<a href="https://github.com/emo8355">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="www.linkedin.com/in/homer-juniordev">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
		</div>
	);
}
