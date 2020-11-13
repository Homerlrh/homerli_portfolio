import React from "react";
import logo from "../../image/logo/logo1.png";

const links = [
	{ name: "about me", path: "/aboutMe" },
	{ name: "skills", path: "/skills" },
	{ name: "project", path: "/projects" },
	{ name: "contact", path: "/contact" },
];

const linkComponent = links.map((link) => (
	<li key={link.name}>
		<a href={link.path}>{link.name}</a>
	</li>
));

export default function Welcome() {
	return (
		<div className="main">
			<h1 className="headTitle">
				Homer li <span>- a full stack/backend developer</span>
			</h1>
			<div className="inNav">
				<img src={logo} alt="logo" width="45%" />
				<ul>{linkComponent}</ul>
			</div>
		</div>
	);
}
