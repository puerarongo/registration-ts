import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import JobItem from "./jobItem/JobItem";
import ErrorPage from "./errorPage/ErrorPage";
import Pagination from "./pagination/Pagination";
import IDataList from "../../types/typeDataList";
import styles from './JobList.module.css';


interface IJobList {
    data: IDataList[],
    loading: boolean,
    error: string
}

const JobList: React.FC<IJobList> = ({data, loading, error}) => {
    const [currentItem, setCurrentItem] = useState<IDataList[]>([])
    const [pageCount, setPageCount] = useState(0)
    const [postOffSet, setPostOffSet] = useState(0);
    const postPerPage = 10;

    useEffect(() => {
        const endOffSet = postOffSet + postPerPage
        setCurrentItem(data.slice(postOffSet, endOffSet))
        setPageCount(Math.ceil(data.length / postPerPage) % data.length)
    }, [postOffSet, postPerPage, data])

    const handlePageClick = (event: any) => {
    const newOffSet = (event.selected * postPerPage) % data.length;
    setPostOffSet(newOffSet);
    };


    return (
        <section className={styles.section}>
            {loading ? (<Loader />) : (
                <>
                    {!error ? (
                        <>
                            <div className={styles.container}>
                                <ul className={styles.list__container}>
                                    {currentItem.length > 0 && currentItem.map(elem => {
                                        return (
                                            <li key={elem.id} className={styles.item}>
                                                <Link to={`${elem.id}`} className={styles.link}>
                                                    <JobItem data={elem} />
                                                </Link>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                            <Pagination handleFunc={handlePageClick} pageCount={pageCount} />
                        </>
                        ) : (
                            <ErrorPage />
                        )}
                    </>
                )}
        </section>   
    )
};

//<Pagination pageCount={pageCount} handleFunc={handlePageClick} />

export default JobList;