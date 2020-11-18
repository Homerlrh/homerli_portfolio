import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
export default function ProjectGroup(props) {
	const [h, setH] = useState(0);
	const handleChangeHeight = () => {
		h === 0 ? setH("100%") : setH(0);
	};
	return (
		<div className="container" onClick={handleChangeHeight}>
			<div style={{ width: "100%", padding: 0 }}>
				<img src={props.source.image} width="100%" alt={props.source.image} />
			</div>
			<div style={{ width: "100%" }}>
				<h3>{props.source.name}</h3>
				<p>{props.source.description}</p>
			</div>
			<div className="overlay" style={{ height: h }}>
				<div className="projectDetail">
					<div className="projectDescription">
						<p>
							<strong>Front End: </strong> {props.source.fe}
						</p>
						<p>
							<strong>Back End: </strong> {props.source.be}
						</p>
						<p>
							<strong>Database: </strong> {props.source.db}
						</p>
						<p>
							<strong>Api: </strong>
							{props.source.api ? props.source.api : null}
						</p>
					</div>
					<div className="projectR">
						<a href={props.source.link}>
							<FontAwesomeIcon icon={faBookmark} />
						</a>
						<a href={props.source.github}>
							<FontAwesomeIcon icon={faGithubSquare} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
