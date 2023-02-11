import React from "react";

import classes from "./PrimarySelect.module.css";

export type sortTypes = "title" | "body" | "";

interface IOption {
    name: string;
    sortType: sortTypes;
}

interface IPrimarySelect {
    options: IOption[];
    defaultValue: string;
    value: sortTypes;
    onChangeCallback<T extends sortTypes>(arg: T): void;
}

export const PrimarySelect: React.FC<IPrimarySelect> = ({ options, defaultValue, value, onChangeCallback }) => {
    return (
        <select
            className={classes.select}
            value={value}
            // @ts-ignore
            onChange={(event) => onChangeCallback(event.target.value)}
        >
            <option disabled value={0}>{defaultValue}</option>
            {
                options.map(option =>
                    <option key={option.sortType} value={option.sortType}>{option.name}</option>
                )
            }
        </select>
    );
};