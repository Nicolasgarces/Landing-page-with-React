import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
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
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
