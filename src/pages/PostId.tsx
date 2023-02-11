import React from "react";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {PostService} from "../service/api/post-service";
import {Loader} from "../components/UI/loader/Loader";

export const PostId = () => {
    const [post, setPost] = React.useState({});
    const [comments, setComments] = React.useState([]);
    const { postId } = useParams();

    // @ts-ignore
    const [fetchingPostById, isLoading, errorMessage] = useFetching( async (id: number) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    });

    // @ts-ignore
    const [fetchingCommentsById, isCommentsLoading, errorCommentMessage] = useFetching(async (id: number) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data)
    });

    React.useEffect(() => {
        // @ts-ignore
        fetchingPostById(postId);
        // @ts-ignore
        fetchingCommentsById(postId)
    }, [postId])

    return (
        <div>
            <h1>ID поста {postId}</h1>
            {
                isLoading ?
                    <Loader />
                    :
                    <div>
                        <h1>
                            {post.title}
                        </h1>
                        <p>
                            {post.body}
                        </p>
                    </div>
            }
            {
                isCommentsLoading ?
                    <Loader />
                    :
                    comments.map(comment =>
                        <div style={{marginTop: 20}}>
                            <h3>{comment.name}</h3>
                            <h4>{comment.email}</h4>
                            <p>{comment.body}</p>
                        </div>
                    )
            }
        </div>
    );
};
