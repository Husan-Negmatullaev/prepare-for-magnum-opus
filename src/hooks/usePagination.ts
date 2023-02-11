import {useMemo} from "react";

export const usePagination = (pageLimit: number): number[] => {
    const pagination = useMemo(() => {
        const activePagination = [];
        for (let i = 0; i < pageLimit; i++) {
            activePagination.push(i + 1);
        }

        return activePagination;
    }, [pageLimit]);

    return pagination;
}