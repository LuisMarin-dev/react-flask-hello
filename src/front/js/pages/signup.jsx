import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";

export const Signup = () => {

    const {actions} = useContext(Context);
    
    const [signup, setSignup] = useState({
        "email":"",
		"password":""
    });

    const handleChange = ({target}) => {
		setSignup({
			...signup,
			[target.name]: target.value
		});
	};

    const sendSignup = (data) => {
		actions.handleSignup(data);
	};


    return(
        <div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<form>
						<div className="form-group">
							<input className="form-control" placeholder="email" type="text" name="email" onChange={(handleChange)} ></input>
						</div>
						<div className="form-group">
							<input className="form-control" placeholder="password" type="password" name="password" onChange={(handleChange)} ></input>
						</div>
						<div className="form-group">
							<button className="btn btn-success" type="button" onClick={() => sendSignup(signup)} >Signup</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    )
};