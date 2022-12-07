import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import fetchGenerator from "../../services/generatorAPI";
import DetailedDescription from "./detailedDescription/DetailedDescription";
import DetailedMap from "./detailedMap/DetailedMap";
import Loader from "../loader/Loader";
import NotFound from "../notFound/NotFound";
import svgPath from "../../services/svgPath";
import IDataList from "../../types/typeDataList";
import styles from './DetailedJob.module.css';


const DetailedJob: React.FC = () => {
    const [detailed, setDetailed] = useState<IDataList>();  // ? (this)
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const jobId = useParams().jobId;

    useEffect(() => {
        setLoading(true);
        fetchGenerator().then(({ data }) => {
            const findData = data.find((elem: IDataList) => elem.id === jobId);
            if (!findData) {
                console.log(findData)
                throw new Error('Page does not exist');
            }
            setDetailed(findData);
        })
            .catch(err => setError(err))
        setLoading(false);
    }, [jobId]);

    return (
        <>
        {loading ? (<Loader />) : (
            !error ? (detailed && (
                <section className={styles.root}>
                    <div className={styles.main}>
                        <div className={styles.section}>
                            <DetailedDescription data={detailed} />
                            <DetailedMap name={detailed.name} address={detailed.address}
                                phone={detailed.phone} email={detailed.email}
                                location={detailed.location} />
                        </div>
                        <Link to="/" className={styles.return__link}>
                            <svg className={styles.svg__arrow}>
                                <use href={svgPath.arrow + "#arrow"}></use>
                            </svg>
                            <p className={styles.link__text}>RETURN TO JOB BOARD</p>
                        </Link>    
                    </div>
                </section>
                )  
            ) : (<NotFound />)
        )}
        </>
    )
};

export default DetailedJob;