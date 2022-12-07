import React, { useState, useEffect } from "react";
import Media from "react-media";
import lineDelimiter from "../../../services/lineDelimiter";
import IDataList from "../../../types/typeDataList";
import svgPath from "../../../services/svgPath";
import getPostTime from "../../../services/postTime";
import styles from './DetailedDescription.module.css';



interface IDescription {
    data: IDataList
};

const DetailedDescription: React.FC<IDescription> = ({ data }) => {
    const [descriptionArr, setDescriptionArr] = useState<string[]>([]);

    useEffect(() => {
        if (data) {
            setDescriptionArr(lineDelimiter(data.description))
        }
    }, [data])


    return (
        <div className={styles.main__container}>
            <div className={styles.container__header}>
                <h2 className={styles.header__title}>Job Details</h2>
                <hr className={styles.header__border1} />
                <a className={styles.header__link} href="#a">
                    <Media queries={{
                        small: "(min-width: 360px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    }}>
                        {matches => (
                            <>
                                {matches.small &&
                                    <svg className={styles.svg__star}>
                                        <use href={svgPath.star + "#star"}></use>
                                    </svg>
                                }
                                {matches.large &&
                                    <svg className={styles.svg__rectangle}>
                                        <use href={svgPath.rectangle + "#rectangle"}></use>
                                    </svg>
                                }
                            </>
                        )}
                    </Media>
                    Save to my list
                </a>
                <a className={styles.header__link} href="#b">
                    <svg className={styles.svg__shape}>
                        <use href={svgPath.shape+ "#shape"}></use>
                    </svg>
                    Share
                </a>
            </div>
            <hr className={styles.header__border2} />
            <Media queries={{
                        small: "(min-width: 360px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    }}>
                        {matches => (
                            <>
                                {matches.small &&
                                    <>
                                        <h2 className={styles.title}>{data.title}</h2>
                                        <div className={styles.container__title}>
                                            <p className={styles.date}>{getPostTime(data.updatedAt)}</p>
                                            <div className={styles.container__salary}>
                                                <p className={styles.salary__text}>Brutto, per year</p>
                                                <h3 className={styles.salary}>{data.salary}</h3>
                                            </div>
                                        </div>
                                    </>
                                }
                                {matches.large &&
                                    <>
                                        <div className={styles.container__title}>
                                            <h2 className={styles.title}>{data.title}</h2>
                                            <div className={styles.container__salary}>
                                                <h3 className={styles.salary}>{data.salary}</h3>
                                                <p className={styles.salary__text}>Brutto, per year</p>
                                            </div>
                                        </div>
                                        <p className={styles.date}>{getPostTime(data.updatedAt)}</p>
                                    </>
                                }
                            </>
                        )}
            </Media>
            <div className={styles.description__container}>
                <p className={styles.description__text}>{descriptionArr[0]}</p>
                <h3 className={styles.description__title}>Responsopilities:</h3>
                <p className={styles.description__text}>{descriptionArr[1]}</p>
                <h3 className={styles.description__title}>Compensation & Benefits:</h3>
                <p className={styles.description__text}>{descriptionArr[2]}</p>
            </div>
            <div className={styles.container__button}>
                <button className={styles.button}>Apply now</button>
            </div>

            <Media queries={{
                    small: "(min-width: 360px) and (max-width: 1199px)",
                    large: "(min-width: 1200px)"
                }}>
                    {matches => (
                        <>
                            {matches.small &&
                            <>
                                <div className={styles.container}>
                                    <h2 className={styles.header__title}>Attached images</h2>
                                    <hr className={styles.additional__border} />
                                    <ul className={styles.img__list}>
                                        {data.pictures.map((elem, i) => {
                                            return (
                                                <li className={styles.item__img} key={i}>
                                                    <img className={styles.img} src={elem} alt={elem + i} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={styles.container}>
                                    <h2 className={styles.header__title}>Additional info</h2>
                                    <hr className={styles.additional__border} />
                                    <h3 className={styles.additional__subtitle}>Employment type</h3>
                                    <ul className={styles.additional__list}>
                                        {data.employment_type.map((elem, i) => {
                                            return (
                                                <li className={styles.item__employment} key={i}>
                                                    <p>{elem}</p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <h3 className={styles.additional__subtitle}>Benefits</h3>
                                    <ul className={styles.additional__list}>
                                        {data.benefits.map((elem, i) => {
                                            return (
                                                <li className={styles.item__benefits} key={i}>
                                                    <p>{elem}</p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </>
                            }
                            {matches.large &&
                            <>
                            <div className={styles.container}>
                                <h2 className={styles.header__title}>Additional info</h2>
                                <hr className={styles.additional__border} />
                                <h3 className={styles.additional__subtitle}>Employment type</h3>
                                <ul className={styles.additional__list}>
                                {data.employment_type.map((elem, i) => {
                                    return (
                                        <li className={styles.item__employment} key={i}>
                                            <p>{elem}</p>
                                        </li>
                                    )
                                })}
                                </ul>
                                <h3 className={styles.additional__subtitle}>Benefits</h3>
                                <ul className={styles.additional__list}>
                                    {data.benefits.map((elem, i) => {
                                        return (
                                            <li className={styles.item__benefits} key={i}>
                                                <p>{elem}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={styles.container}>
                                <h2 className={styles.header__title}>Attached images</h2>
                                <hr className={styles.additional__border} />
                                <ul className={styles.img__list}>
                                    {data.pictures.map((elem, i) => {
                                        return (
                                            <li className={styles.item__img} key={i}>
                                                <img className={styles.img} src={elem} alt={elem + i} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            </>
                            }
                        </>
                    )}
            </Media>
        </div>
    )    
};

export default DetailedDescription;