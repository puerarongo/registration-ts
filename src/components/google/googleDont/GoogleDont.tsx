import React from 'react';
import styles from '../../snopifyStore/snopifyDont/SnopifyDont.module.css';
import svgPath from '../../../services/svgPath';
import ISnopifyPage from '../../../types/typeSnopifyStep';


const GoogleDont: React.FC<ISnopifyPage> = ({ step }) => {
    const clickHandle = () => step('connect');

    return (
        <>
            <svg className={styles.svg__label}>
                <use href={svgPath.label + "#label"}></use>
            </svg>
            <h2 className={styles.title}>Dont use Gmail?</h2>
            <p className={styles.text}>Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform.</p>
            <form className={styles.form}>
                <p className={styles.label}>Platform</p>
                place for radio button
            </form>
            <button className={styles.button} type='button'>Submit</button>
            <p className={styles.text__link}>
                Actually use Gmail?
                <button className={styles.link} type='button' onClick={clickHandle}> Connect</button>
            </p>
        </>
    )
};

export default GoogleDont;