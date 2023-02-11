import React from 'react';

import classes from "./PrimaryInput.module.css";

type typePrimaryInput = React.InputHTMLAttributes<HTMLInputElement>;

export const PrimaryInput = React.forwardRef<HTMLInputElement, typePrimaryInput>((props, ref) => {
    return (
        <input className={classes.input} {...props} ref={ref} />
    );
});