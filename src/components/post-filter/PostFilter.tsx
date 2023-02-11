import React from 'react';

import {PrimaryInput} from "../UI/primary-input/PrimaryInput.";
import {PrimarySelect, sortTypes} from "../UI/primary-select/PrimarySelect";

interface IPostFilter {
    filter: {
        sort: sortTypes,
        search: string
    },
    setFilter: React.Dispatch<React.SetStateAction<{
        sort: sortTypes,
        search: string
    }>>;
}

export const PostFilter: React.FC<IPostFilter> = ({ filter, setFilter }) => {

    return (
        <div>
            <PrimaryInput
                value={filter.search}
                /* @ts-ignore */
                onChange={(event) => setFilter({...filter, search: event.target.value})}
                placeholder={"Поиск постов..."}
            />
            <PrimarySelect
                /* @ts-ignore */
                onChangeCallback={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={"Сортировка по:"}
                value={filter.sort}
                options={[
                    {
                        name: "Названию",
                        sortType: "title"
                    },
                    {
                        name: "Описанию",
                        sortType: "body"
                    },
                ]}
            />
        </div>
    );
};