import React from "react";
import Links from "../links/Links";
import { skillArray } from "../skillGroup";
import { Bounce } from "react-reveal";

const SkillGroup = skillArray.map((skill, index) => (
	<Bounce left cascade delay={(index + 1) * 300}>
		<div>
			<div className="skill">
				<h2>{skill.name}</h2>
				<div className="logoGroup">
					{skill.images.map((image) => (
						<img
							key={image.default}
							className="logo"
							src={image.default}
							alt="logo"
						/>
					))}
				</div>
			</div>
		</div>
	</Bounce>
));

export default function Skills() {
	return (
		<div className="main" style={{ minWidth: "90%", flexDirection: "row" }}>
			<div className="skills">{SkillGroup}</div>
			<Links page="skills" />
		</div>
	);
}
