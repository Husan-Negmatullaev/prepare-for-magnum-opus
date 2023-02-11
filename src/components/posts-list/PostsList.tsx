import React from "react";
import {
    CSSTransition,
    TransitionGroup,
} from "react-transition-group";

import {IPostItem, PostItem} from "../post-item/PostItem";

interface PostsList {
    title: string;
    posts: IPostItem[];
    deletePost: (idx: IPostItem) => void;
}

export const PostsList: React.FC<PostsList> = ({posts, title, deletePost}) => {
    return (
        <section>
            <h2 className="title">{title}</h2>
                {posts.length ?
                    <TransitionGroup>
                        {posts.map((post, index) =>
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >
                                <PostItem deletePost={deletePost} {...post} />
                            </CSSTransition>)
                        }
                    </TransitionGroup>
                    :
                    <h3>Посты кончились...</h3>
                }
        </section>
    );
};