import React from "react";
import {PrimaryButton} from "../UI/primary-button/PrimaryButton";
import {usePagination} from "../../hooks/usePagination";

export const Pagination = ({ limitPage, currentPage, changeCurrentPage }) => {
    const paginationButtons = usePagination(limitPage);

    return (
        <>
            {
                paginationButtons.length ?
                    paginationButtons.map(pag =>
                        <PrimaryButton
                            key={pag}
                            type={"button"}
                            onClick={() => changeCurrentPage(pag)}
                            className={currentPage === pag ? "pagination-button active" : "pagination-button"}
                        >
                            {pag}
                        </PrimaryButton>
                    )
                    :
                    null
            }
        </>
    );
};