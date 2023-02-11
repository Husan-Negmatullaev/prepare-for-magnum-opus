export const pageCount = (totalCount: number, pageLimit: number) => {
    return Math.ceil(totalCount / pageLimit);
};