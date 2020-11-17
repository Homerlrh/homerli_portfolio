import React from "react";
import { Fade } from "react-reveal";

const navLinks = [
	{ name: "home", path: "/" },
	{ name: "about me", path: "/aboutMe" },
	{ name: "skills", path: "/skills" },
	{ name: "project", path: "/projects" },
	{ name: "contact", path: "/contact" },
];

export default function Links({ page }) {
	const linkComponent = navLinks.map((link) => (
		<li key={link.name}>
			{page === link.name ? (
				<a href={link.path} className="active">
					{link.name}
				</a>
			) : (
				<a href={link.path}>{link.name}</a>
			)}
		</li>
	));

	return (
		<Fade right cascade>
			<ul>{linkComponent}</ul>
		</Fade>
	);
}
