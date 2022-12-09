import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import { Link } from 'react-router-dom';
import styles from './SnopifyConfirmed.module.css';
import ISnopifyPage from '../../../types/typeSnopifyStep';
import picturePath from '../../../services/picturePath';

const SnopifyConfirmed: React.FC<ISnopifyPage> = ({ step }) => {
    const { snopify, setPageStatus } = useContext(FormContext);
    const clickHandle = () => step('done');

    useEffect(() => { setPageStatus(true) }, [setPageStatus]);

    return (
        <>
            <img className={styles.img} src={picturePath.raccoon} alt='raccoon face' />
            {snopify ? (
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
                <Link to='login' className={styles.link}>Connect another one</Link>
            </p>
        </>
    )
};

export default SnopifyConfirmed;