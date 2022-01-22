import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-white bg-black">
			<div className="container">
				<a
					className="navbar-brand "
					href="#"
					style={{ color: "white" }}>
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-flex justify-content-end "
					id="navbarText">
					<a
						className="nav-link "
						href="#"
						style={{ color: "white" }}>
						Home
					</a>
					<a className="nav-link" href="#" style={{ color: "white" }}>
						About
					</a>
					<a className="nav-link" href="#" style={{ color: "white" }}>
						Services
					</a>
					<a className="nav-link" href="#" style={{ color: "white" }}>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
