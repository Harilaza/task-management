import React from 'react';
import {Outlet} from "react-router-dom";
import {Navbar} from "../../../shared/navbar";

export const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};