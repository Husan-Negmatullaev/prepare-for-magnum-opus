import React from "react";
import {Outlet} from "react-router-dom";

import {Navbar} from "./Navbar";

import "../../styles/style.css";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="app">
                <Outlet />
            </main>
        </>
    );
};