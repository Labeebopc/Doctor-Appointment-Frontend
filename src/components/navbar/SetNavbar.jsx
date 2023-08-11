import React from 'react'
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

export const SetNavbar = () => {
    const location = useLocation()
    return (
        <>
            {(location.pathname === "/login" || location.pathname === "/register") ? <></> : <Navbar />}
        </>
    )
}

