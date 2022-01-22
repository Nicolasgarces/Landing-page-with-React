import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row">
					<Jumbotron />
				</div>
				<div className="row">
					<div className="col-3">Card1</div>
					<div className="col-3">Card2</div>
					<div className="col-3">Card3</div>
					<div className="col-3">Card4</div>
				</div>
			</div>
			<div>footer</div>
		</div>
	);
};

export default Home;
