//sets up the reusable Body component
import React from "react";
import "./Body.css";

const Body = () => (
	<header className = "header">
		<h1>GoT Clicky Game!</h1>
		<h2>Click on an image to earn points, but don't click on any more than once!</h2>
	</header>
);

export default Body;