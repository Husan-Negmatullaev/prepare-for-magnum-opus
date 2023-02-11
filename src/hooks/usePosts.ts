import {useMemo} from "react";
import {IPostItem} from "../components/post-item/PostItem";
import {sortTypes} from "../components/UI/primary-select/PrimarySelect";

type typeUseSortedPosts = {
    (posts: IPostItem[], sort: sortTypes): IPostItem[];
}

export const useSortedPosts: typeUseSortedPosts = (posts, sort): IPostItem[] => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }

        return posts;
    }, [posts, sort])

    return sortedPosts;
};

type typeUsePosts = {
    (posts: IPostItem[], sort: sortTypes, search: string): IPostItem[];
};

export const usePosts: typeUsePosts = (posts, sort, search): IPostItem[] => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
    }, [sortedPosts, search])

    return sortedAndSearchedPosts;
};