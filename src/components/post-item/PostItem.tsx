import React from 'react';

export interface IPostItem {
    title: string;
    id: number;
    description: string;
}

export const PostItem: React.FC<IPostItem> = ({ title, id, description }) => {
    return (
        <article className="post">
            <div className="post__content">
                <h4 className="post__title">{id}. {title}</h4>
                <p className="post__description">{description}</p>
            </div>
            <div className="post__actions">
                <button type="button" className="post__button">Удалить</button>
            </div>
        </article>
    );
};