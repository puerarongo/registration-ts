import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from './ShopifyConfirmed.module.css';
import picturePath from '../../../services/picturePath';

interface IShopifyConfirmed {
    step: number,
    setStep: Function,
    shopifyStep: string,
    setShopifyStep: Function
}

const ShopifyConfirmed: React.FC<IShopifyConfirmed> = ({ step, setStep, shopifyStep, setShopifyStep }) => {
    const { setShopify, setPageStatus } = useContext(FormContext);
    const clickHandle = () => {
        setStep(step + 1);
        setShopifyStep('already')
    };

    const wrongStore = () => {
        setShopify('');
        setShopifyStep('connect');
    };

    useEffect(() => { setPageStatus(true) }, [setPageStatus]);

    return (
        <>
            <img className={styles.img} src={picturePath.raccoon} alt='raccoon face' />
            {shopifyStep === 'already' ? (
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