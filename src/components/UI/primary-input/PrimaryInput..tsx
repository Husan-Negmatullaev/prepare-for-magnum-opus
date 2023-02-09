import React from 'react';

import classes from "./PrimaryInput.module.css";

interface IPrimaryInput extends React.ComponentPropsWithRef<"input"> {

}

export const PrimaryInput = React.forwardRef<HTMLInputElement, IPrimaryInput>((props, ref) => {
    return (
        <input className={classes.input} {...props} ref={ref} />
    );
});