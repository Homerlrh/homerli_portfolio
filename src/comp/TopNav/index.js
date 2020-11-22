import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const navLinks = [
	{ name: "home", path: "/" },
	{ name: "about me", path: "/aboutMe" },
	{ name: "skills", path: "/skills" },
	{ name: "project", path: "/projects" },
	{ name: "contact", path: "/contact" },
];

const link = navLinks.map((link) => (
	<li>
		<a href={link.path}>{link.name}</a>
	</li>
));

export default function Index() {
	const [h, setH] = useState(35);
	const [isOpen, setOpen] = useState(false);
	return (
		<div
			className="tNav"
			style={{
				backgroundColor: "#fff",
				width: "100%",
				height: h,
				overflow: "hidden",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<ul>
				<li>
					<HamburgerMenu
						isOpen={isOpen}
						menuClicked={() => {
							isOpen ? setOpen(false) : setOpen(true);
							h == 35 ? setH(150) : setH(35);
						}}
						width={18}
						height={15}
						strokeWidth={1}
						rotate={0}
						color="black"
						borderRadius={10}
						animationDuration={0.5}
					/>
				</li>
				{link}
			</ul>
		</div>
	);
}
