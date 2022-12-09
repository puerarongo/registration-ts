import React from 'react';
import styles from './SnopifyDont.module.css';
import svgPath from '../../../services/svgPath';
import ISnopifyPage from '../../../types/typeSnopifyStep';


const SnopifyDont: React.FC<ISnopifyPage> = ({ step }) => {
    const clickHandle = () => step('connect');

    return (
        <>
            <svg className={styles.svg__label}>
                <use href={svgPath.label + "#label"}></use>
            </svg>
            <h2 className={styles.title}>Dont use Shopify?</h2>
            <p className={styles.text}>Chad Beta is currently only available on Shopify. Well send you an email when Chad becomes available on your platform.</p>
            <form className={styles.form}>
                <p className={styles.label}>Platform</p>
                place for radio button
            </form>
            <button className={styles.button} type='button'>Submit</button>
            <p className={styles.text__link}>
                Actually use Shopify?
                <button className={styles.link} type='button' onClick={clickHandle}> Connect</button>
            </p>
        </>
    )
};

export default SnopifyDont;