import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from '../../snopifyStore/snopifyDone/SnopifyDone.module.css';
import picturePath from '../../../services/picturePath';
import IStepPage from '../../../types/typeStepPage';
import { register } from '../../../services/authAPI';


const GoogleDone: React.FC<IStepPage> = ({ step, setStep }) => {
    const { email, name, password, snopify, google, setPageStatus } = useContext(FormContext);

    useEffect(() => { setPageStatus(true) }, [setPageStatus]);

    const dataHandler = async () => {
        setStep(step + 1);
        const body = { email, name, password, snopify, google }
        const res = await register(body)
        console.log(res)
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