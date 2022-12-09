import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from '../../shopifyStore/shopifyDone/ShopifyDone.module.css';
import picturePath from '../../../services/picturePath';
import IStepPage from '../../../types/typeStepPage';
import { register } from '../../../services/authAPI';


const GoogleDone: React.FC<IStepPage> = ({ step, setStep }) => {
    const { email, name, password, shopify, google, setPageStatus } = useContext(FormContext);

    useEffect(() => { setPageStatus(true) }, [setPageStatus]);

    const dataHandler = async () => {
        const body = { name, email, password, shop_token: shopify, google_token: google };
        const res = await register(body);
        console.log('Google Done', res);
        setStep(step + 1);
    }
    
    return (
        <>
            <img className={styles.img} src={picturePath.checkMark} alt='check mark' />
            <h2 className={styles.title}>Dont use Gmail?</h2>
            <p className={styles.text}>Thank you for your interest in Chad! We’ll be hard at work building integrations to support your email client.</p>
            <button className={styles.button} type='button' onClick={dataHandler}>Done</button>
        </>
    )
};

export default GoogleDone;