import React from "react";
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

interface IPagination {
    pageCount: number,
    handleFunc: any
}

const Pagination: React.FC<IPagination> = ({handleFunc, pageCount}) => {
    return (
        <div className={styles.pagination}>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={handleFunc}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
            />
        </div>
    )
};

export default Pagination;