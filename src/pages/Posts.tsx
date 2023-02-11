import React from "react";

import {IPostItem} from "../components/post-item/PostItem";
import {PostsList} from "../components/posts-list/PostsList";
import {PostForm} from "../components/post-form/PostForm";
import {sortTypes} from "../components/UI/primary-select/PrimarySelect";
import {PostFilter} from "../components/post-filter/PostFilter";
import {PrimaryModal} from "../components/UI/primary-modal/PrimaryModal";
import {PrimaryButton} from "../components/UI/primary-button/PrimaryButton";
import {Loader} from "../components/UI/loader/Loader";

import {PostService} from "../service/api/post-service";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";

import {pageCount} from "../utils/pagination-count";
import {Pagination} from "../components/pagination/pagination";

export const Posts = () => {
    const [listPosts, setListPosts] = React.useState<IPostItem[]>([]);
    const [filter, setFilter] = React.useState<{ search: string; sort: sortTypes }>({search: "", sort: ""})
    const [visible, setVisible] = React.useState<boolean>(false);
    const [maxCountPages, setMaxCountPage] = React.useState<number>();
    const [limitPage, setLimitPage] = React.useState<number>(10)
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    // @ts-ignore
    const [fetchPosts, isFetching, errorMessage] = useFetching(async (limit, page) => {
        const response = await PostService.getAllPosts(limit, page);
        setListPosts(response.data);
        const totalCount = parseInt(response.headers["x-total-count"]);
        setMaxCountPage(totalCount)
        setLimitPage(pageCount(totalCount, limitPage));
    });

    const createPost = (newPost: IPostItem) => {
        setListPosts([...listPosts, newPost]);
        setVisible(prev => !prev);
    };

    React.useEffect(() => {
        //@ts-ignore
        fetchPosts(limitPage, currentPage);
    }, [])

    const deletePost = (post: IPostItem) => {
        setListPosts(
            listPosts.filter(item => item.id !== post.id)
        );
    };

    const sortedAndSearchedPosts = usePosts(listPosts, filter.sort, filter.search);

    const changeCurrentPagination = (pag: number) => {
        setCurrentPage(pag);
        // @ts-ignore
        fetchPosts(limitPage, pag);
    }

    return (
        <main className="app">
            <PrimaryButton style={{marginBottom: 10}} onClick={() => setVisible(prev => !prev)}>
                Создать пост
            </PrimaryButton>
            <PrimaryModal changeVisible={setVisible} isShow={visible}>
                <PostForm createPost={createPost} />
            </PrimaryModal>
            <hr style={{margin: "10px 0px"}} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {
                // @ts-ignore
                errorMessage && <h1>{errorMessage}</h1>
            }
            {
                isFetching ?
                    <div style={{textAlign: "center"}}>
                        <Loader />
                    </div>
                    :
                    <PostsList deletePost={deletePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
            }
            <Pagination
                currentPage={currentPage}
                limitPage={limitPage}
                changeCurrentPage={changeCurrentPagination}
            />
        </main>
    )
}