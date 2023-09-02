import React from "react";
import { useNavigate } from "react-router-dom";


export const SignupButton = () => {
    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate("/signup");
    };

    return(
        <button className="btn btn-primary" type="button" onClick={navigateToSignup()}>Siignup</button>
    );
};

//  default LoginButton;