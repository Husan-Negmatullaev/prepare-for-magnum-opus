import React from "react";

import classes from "./PrimaryModal.module.css";

interface IPrimaryModal extends React.PropsWithChildren {
    isShow: boolean;
    changeVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const PrimaryModal: React.FC<IPrimaryModal> = ({ isShow, children, changeVisible }) => {
    const mainClass = [classes.primaryModal];

    if (isShow) {
        mainClass.push(classes.active);
    }

    return (
        <div className={mainClass.join(" ")} onClick={() => changeVisible(prev => !prev)}>
            <div className={classes.primaryModal__content} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};