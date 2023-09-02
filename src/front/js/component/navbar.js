import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./loginbutton.jsx";
import SignupButton from "./signupbutton.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Your Auth System</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<SignupButton />
						<LoginButton />
						<LoginButton />
						<button className="btn btn-primary">Logout</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
