import React from "react";
import background from "./images/image.jpeg";

const Homepage = () => (
	<div className="homepage">
		<div className="background">
			<img src={background} />
		</div>
		<h1 className="title">Hearts of Ukraine</h1>
	</div>
);

export default Homepage;
