import React from "react";
import Links from "../links/Links";
import pic from "../../image/profilePic.jpg";
import { Fade, Flip } from "react-reveal";

export default function Aboutme() {
	return (
		<div className="main">
			<Flip bottom>
				<div className="imageCropper">
					<img src={pic} alt="logo" className="profilePic" />
				</div>
			</Flip>
			<div className="inNav" style={{ width: "60%", alignItems: "flex-start" }}>
				<Fade left>
					<div className="selfIntro">
						<h2>
							I tend to be a lazy person because a lazy person can always find
							an easier way to do things
						</h2>
						<p>My name is Homer, I am a full stack / backend developer.</p>
						<p>I can speak both English and Chinese (Mandarin , Cantonese)</p>
						<p> When I am free, I enjoy skateboarding and making model</p>
					</div>
				</Fade>
				<Links page="about me" />
			</div>
		</div>
	);
}
