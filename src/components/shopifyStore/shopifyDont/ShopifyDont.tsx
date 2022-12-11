import React from 'react';
import styles from './ShopifyDont.module.css';
import svgPath from '../../../services/svgPath';
import Media from 'react-media';
import SelectComponent from '../../select/Select';

interface IShopifyDont {
    setShopifyStep: Function
}

const ShopifyDont: React.FC<IShopifyDont> = ({ setShopifyStep }) => {
    const clickHandle = () => setShopifyStep('done');
    const returnHandle = () => setShopifyStep('connect');
    const dataArr = ['1', '2', '3'];

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
            <SelectComponent data={dataArr} />
            <button className={styles.button} type='button' onClick={clickHandle}>Submit</button>
            <p className={styles.text__link}>
                Actually use Shopify?
                <button className={styles.link} type='button' onClick={returnHandle}> Connect</button>
            </p>
        </>
    )
};

export default ShopifyDont;