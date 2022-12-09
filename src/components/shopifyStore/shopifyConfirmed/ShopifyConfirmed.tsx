import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from './ShopifyConfirmed.module.css';
import IShopifyPage from '../../../types/typeShopifyStep';
import picturePath from '../../../services/picturePath';

const ShopifyConfirmed: React.FC<IShopifyPage> = ({ step }) => {
    const { shopify, setShopify, setPageStatus } = useContext(FormContext);
    const clickHandle = () => step('done');

    const wrongStore = () => {
        setShopify('');
        step('connect');
    };

    useEffect(() => { setPageStatus(true) }, [setPageStatus]);

    return (
        <>
            <img className={styles.img} src={picturePath.raccoon} alt='raccoon face' />
            {shopify ? (
                <>
                    <h2 className={styles.token__title}>STORE-NAME already connected</h2>
                </>
            ) : (
                <>
                    <h2 className={styles.title}>Store connected</h2>
                    <p className={styles.text}>Chad is now able to manage customer support requests for STORE-NAME.</p>
                </>
            )}
            
            <button className={styles.button} type='button' onClick={clickHandle}>Continue</button>
            <p className={styles.text__link}>
                Wrong store?
                <button className={styles.link} type="button" onClick={wrongStore}>Connect another one</button>
            </p>
        </>
    )
};

export default ShopifyConfirmed;