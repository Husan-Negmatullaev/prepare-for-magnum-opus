import React from 'react';

import classes from "./PrimaryButton.module.css";

interface IPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
};