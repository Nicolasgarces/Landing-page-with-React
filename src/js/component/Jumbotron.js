import React from "react";

const Jumbotron = () => {
	return (
		<div
			className="jumbotron container"
			style={{
				backgroundColor: "rgba(231, 231, 231)",
				marginBottom: "20px",
				paddingLeft: "50px",
			}}>
			<h1 className="display-10"> A Warm Welcome!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="#"
					role="button"
					style={{ marginBottom: "50px" }}>
					Learn more
				</a>
			</p>
		</div>
	);
};

export default Jumbotron;
