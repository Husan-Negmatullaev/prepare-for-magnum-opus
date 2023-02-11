import React from "react";
import { createBrowserRouter } from "react-router-dom";

import {privateRoutes, publicRoutes} from "../../router/route";
import {Posts} from "../../pages/Posts";
import {PostId} from "../../pages/PostId";
import {About} from "../../pages/About";
import {Login} from "../../pages/Login";

import "./AppPages.module.css";
import {Layout} from "../layout/Layout";

export const appPages = () => {
    const isAuth = true;

    return createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: isAuth ? publicRoutes : privateRoutes,
        },
    ]
)}