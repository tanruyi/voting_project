/** @format */

import React from "react";
import placeholder_image from "../assets/elementor-placeholder-image.webp";

const character = () => {
	return (
		<div className="character_component">
			<img className="voting_image" src={placeholder_image} alt="placeholder-image" />
			<h1>100%</h1>
			<h2>Name</h2>
		</div>
	);
};

export default character;
