import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    
    const navigate = useNavigate();
    // window.onload(if())
    useEffect(()=>{
        if(token == null){
            navigate('/login    ')
        }
    })
    
    return (
        <div className="container-fluid">
            <h1>This is the Private Page.</h1>
        </div>
    )
}