import React, {useEffect, useContext} from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from './ShopifyDone.module.css';
import picturePath from '../../../services/picturePath';
import IStepPage from '../../../types/typeStepPage';

const ShopifyDone: React.FC<IStepPage> = ({ step, setStep }) => {
    const { setPageStatus } = useContext(FormContext);
    
    useEffect(() => { setPageStatus(true) }, [setPageStatus]);

    return (
        <>
            <img className={styles.img} src={picturePath.checkMark} alt='check mark' />
            <h2 className={styles.title}>Response received</h2>
            <p className={styles.text}>Thank you for your interest in Chad! Well be hard at work building integrations to support your platform.</p>
            <button className={styles.button} type='button' onClick={() => setStep(step + 1)}>Done</button>
        </>
    )
};

export default ShopifyDone;