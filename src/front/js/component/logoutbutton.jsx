import React from "react";
import { useNavigate } from "react-router-dom";


const LogOutButton = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    };

    return(
        <button className="btn btn-primary" type="button" onClick={navigateToLogin()}>Logout</button>
    );
};

export default LogOutButton;