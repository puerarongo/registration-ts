import React from 'react';
import styles from './ShopifyDont.module.css';
import svgPath from '../../../services/svgPath';
import IShopifyPage from '../../../types/typeShopifyStep';
import Media from 'react-media';


const ShopifyDont: React.FC<IShopifyPage> = ({ step }) => {
    const clickHandle = () => step('connect');

    return (
        <>
            <Media queries={{ large: '(min-width: 1350px)' }}>
                {media => (
                    <>
                        {media.large && (
                            <svg className={styles.svg__label}>
                                <use href={svgPath.label + "#label"}></use>
                            </svg>
                        )}
                    </>
                )}
            </Media>
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

export default ShopifyDont;