import React from "react";
import { useNavigate } from "react-router-dom";


const LoginButton = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    };

    return(
        <button className="btn btn-primary" type="button" onClick={navigateToLogin()}>Login</button>
    );
};

export default LoginButton;