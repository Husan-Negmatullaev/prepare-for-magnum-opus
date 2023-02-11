import React from 'react';
import {Link, NavLink} from "react-router-dom";

import classes from "./Layout.module.css";

export const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul className={classes.navbar__list}>
                <li className={classes.navbar__item}>
                    <NavLink to={"/posts"} className={classes.navbar__link}>
                        Posts
                    </NavLink>
                </li>
                <li className={classes.navbar__item}>
                    <NavLink to={"/about"} className={classes.navbar__link}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};