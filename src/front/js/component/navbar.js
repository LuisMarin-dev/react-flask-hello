import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
const {store, actions} = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Your Auth System</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">Signup</button>
					</Link>
					<Link to="/">
						<button className="btn btn-primary" onClick={actions.handleLogout}>Logout</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
