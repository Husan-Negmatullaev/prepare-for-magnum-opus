import React from 'react';
import {PrimaryButton} from "../UI/primary-button/PrimaryButton";
import {useNavigate} from "react-router-dom";

export interface IPostItem {
    title: string;
    id: number;
    body: string;
}

type deletePostType = { deletePost: (id: IPostItem) => void };

export const PostItem: React.FC<IPostItem & deletePostType> = (props) => {
    const navigate = useNavigate();

    return (
        <article className="post">
            <div className="post__content">
                <h4 className="post__title">{props.id}. {props.title}</h4>
                <p className="post__description">{props.body}</p>
            </div>
            <div className="post__actions">
                <PrimaryButton onClick={() => navigate("/posts/" + props.id)} type="button" className="post__button">Открыть</PrimaryButton>
                <PrimaryButton onClick={() => props.deletePost(props)} type="button" className="post__button">Удалить</PrimaryButton>
            </div>
        </article>
    );
};