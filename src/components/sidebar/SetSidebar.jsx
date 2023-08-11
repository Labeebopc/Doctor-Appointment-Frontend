import React from 'react'
import { Sidebar } from "./Sidebar";
import { useLocation } from "react-router-dom";

export const SetSidebar = () => {
    const location = useLocation()
    return (
        <>
            {(location.pathname === "/login" || location.pathname === "/register") ? <></> : <Sidebar />}
        </>
    )
}

