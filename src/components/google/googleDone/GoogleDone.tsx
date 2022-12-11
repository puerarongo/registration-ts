import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from '../../shopifyStore/shopifyDone/ShopifyDone.module.css';
import picturePath from '../../../services/picturePath';


interface IGoogleDone {
    step: number,
    setStep: Function,
    setGoogleStep: Function
}

const GoogleDone: React.FC<IGoogleDone> = ({ step, setStep, setGoogleStep }) => {
    const { setGoogle, setPageStatus } = useContext(FormContext);

    useEffect(() => { setPageStatus(true) }, [setPageStatus]);

    const clickHandle = () => {
        setStep(step - 2);
        setGoogleStep('connect');
        setGoogle('');
    }
    
    return (
        <>
            <img className={styles.img} src={picturePath.checkMark} alt='check mark' />
            <h2 className={styles.title}>Dont use Gmail?</h2>
            <p className={styles.text}>Thank you for your interest in Chad! We’ll be hard at work building integrations to support your email client.</p>
            <button className={styles.button} type='button' onClick={clickHandle}>Done</button>
        </>
    )
};

export default GoogleDone;