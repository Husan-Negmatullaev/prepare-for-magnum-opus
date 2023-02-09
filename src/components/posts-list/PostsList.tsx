import React from 'react';
import {IPostItem, PostItem} from "../post-item/PostItem";

interface PostsList {
    title: string;
    posts: IPostItem[];
}

export const PostsList: React.FC<PostsList> = ({posts, title}) => {
    return (
        <section>
            <h2 className="title">{title}</h2>
            {
                posts.map(post => (
                    <PostItem key={post.id} {...post}  />
                ))
            }
        </section>
    );
};