import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();
    const {token} = store;

    useEffect(()=>{
        if(token == null){
            navigate("/login")
        }
    }, [])
    
    return (
        <div className="container-fluid">
            <h1>This is the Private Page.</h1>
        </div>
    )
}