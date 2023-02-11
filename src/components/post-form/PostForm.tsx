import React from 'react';
import {PrimaryInput} from "../UI/primary-input/PrimaryInput.";
import {PrimaryButton} from "../UI/primary-button/PrimaryButton";
import {IPostItem} from "../post-item/PostItem";

interface IPostForm extends React.ComponentPropsWithoutRef<"form"> {
    createPost: ((newPost: IPostItem) => void);
}

export const PostForm: React.FC<IPostForm> = ({ createPost }) => {
    const [post, setPost] = React.useState({title: "", body: ""});
    const startIndex = React.useRef(2);

    const onSubmitCreatePost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createPost({...post, id: ++startIndex.current});
        setPost({title: "", body: ""});
    };

    return (
        <form
            action="#"
            onSubmit={onSubmitCreatePost}
        >
            <PrimaryInput
                value={post.title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPost({...post, title: event.target.value})}
                type={"text"}
                placeholder={"Название поста"}
            />
            <PrimaryInput
                value={post.body}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPost({...post, body: event.target.value})}
                type={"text"}
                placeholder={"Описание поста"}
            />
            <PrimaryButton type={"submit"}>Создать пост</PrimaryButton>
        </form>
    );
};