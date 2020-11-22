import React from "react";
import logo from "../../image/logo/logo1.png";
import Links from "../links/Links";
import { Fade, Zoom } from "react-reveal";

export default function Welcome() {
	const pageName = "home";
	return (
		<div className="main">
			<h1 className="headTitle">
				<Zoom top cascade>
					Homer li
					<Zoom top cascade>
						<span>- a full stack/backend developer</span>
					</Zoom>
				</Zoom>
			</h1>
			<div className="inNav" style={{ alignItems: "center" }}>
				<Fade left>
					<img src={logo} alt="logo" width="45%" />
				</Fade>
				<Links page={pageName} />
			</div>
		</div>
	);
}
