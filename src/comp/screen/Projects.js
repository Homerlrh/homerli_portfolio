import React from "react";
import { Slide } from "react-reveal";
import Links from "../links/Links";
import ProjectGroup from "../projectGroup";
import { projects } from "../projects";

const info = projects.map((x) => <ProjectGroup source={x} />);

export default function Projects() {
	return (
		<div className="main">
			<h1>Projects</h1>
			<div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
				<Slide left>
					<div className="projectGroup">{info}</div>
				</Slide>
				<Links page="project" />
			</div>
		</div>
	);
}
