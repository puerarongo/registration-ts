import React from "react";
import Media from "react-media";
import IDataList from "../../../types/typeDataList";
import svgPath from "../../../services/svgPath";
import getPostTime from "../../../services/postTime";
import styles from './JobItem.module.css';


interface IJobItem { data: IDataList };

const JobItem: React.FC<IJobItem> = ({ data }) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={data.pictures[0]} alt={data.id} />
                <div>
                    <Media queries={{ size: "(max-width: 1199px)" }}>
                        {matches => (
                            <>
                                {matches.size &&
                                    <div className={styles.into}>
                                        <svg className={styles.svg__stars}>
                                            <use href={svgPath.stars + "#stars"}></use>
                                        </svg>
                                        <p className={styles.date}>{getPostTime(data.updatedAt)}</p>
                                    </div>
                                }
                            </>
                        )}
                    </Media>
                    <h3 className={styles.title}>{data.title}</h3>
                    <p className={styles.text}>Department name · {data.name}</p>
                    <div className={styles.container__address}>
                        <svg className={styles.svg__position}>
                            <use href={svgPath.position + "#position"}></use>
                        </svg>  
                        <p className={styles.address}>{data.address}</p>
                    </div>
                </div>
                <Media queries={{ size: "(min-width: 1200px)" }}>
                        {matches => (
                            <>
                                {matches.size &&
                                    <div className={styles.into}>
                                        <svg className={styles.svg__bigstars}>
                                            <use href={svgPath.big__stars + "#big__stars"}></use>
                                        </svg>
                                        <div className={styles.date__container}>
                                            <svg className={styles.svg__rectangle}>
                                                <use href={svgPath.rectangle + "#rectangle"}></use>
                                            </svg>
                                            <p className={styles.date}>{getPostTime(data.updatedAt)}</p>
                                        </div>
                                    </div>
                                }
                            </>
                        )}
                    </Media>
            </div>
        </>
    )
};

export default JobItem;