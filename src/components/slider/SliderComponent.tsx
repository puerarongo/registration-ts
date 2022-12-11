import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import svgPath from '../../services/svgPath';
import styles from './SliderComponent.module.css';


const SliderComponent: React.FC = () => {
    const itemsArray: string[] = [
        "Acquiring a new customer is 5x more costly than making an unhappy customer happy",
        "Acquiring a new customer is 5x more costly than making an unhappy customer happy",
        "Acquiring a new customer is 5x more costly than making an unhappy customer happy",
        "Acquiring a new customer is 5x more costly than making an unhappy customer happy",
        "Acquiring a new customer is 5x more costly than making an unhappy customer happy",
    ];

    return (
        <div className={styles.container}>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                >
                {itemsArray.map((elem: string, index: number) => (
                    <SwiperSlide key={index}>
                        <div className={styles.container}>
                            <div className={styles.item}>
                                <svg className={styles.svg__slider}>
                                    <use href={svgPath.sliderIcon + "#sliderIcon"}></use>
                                </svg>
                                <p className={styles.text}>{elem}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};

export default SliderComponent;