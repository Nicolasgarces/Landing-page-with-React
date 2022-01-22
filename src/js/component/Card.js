import React from "react";

const Card = () => {
	return (
		<div className="card" style={{ width: "19rem", marginBottom: "20px" }}>
			<img
				src="https://i.pinimg.com/564x/ab/61/d4/ab61d4958ca88491732f09735966a113.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title d-flex justify-content-center">
					Card title
				</h5>
				<p className="card-text d-flex justify-content-center">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a
					href="#"
					className="btn btn-primary d-flex justify-content-center">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
