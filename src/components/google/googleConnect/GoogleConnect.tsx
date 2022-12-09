import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from '../../shopifyStore/shopifyConnect/ShopifyConnect.module.css';
import svgPath from '../../../services/svgPath';
import ISnopifyPage from '../../../types/typeShopifyStep';
import { googleGet } from '../../../services/authAPI';


const GoogleConnect: React.FC<ISnopifyPage> = ({ step }) => {
    const { setGoogle, setPageStatus } = useContext(FormContext);

    useEffect(() => { setPageStatus(false) }, [setPageStatus]);

    const doneHandle = async () => {
        step('done');
        await googleGet()
            .then(res => setGoogle(res.data.token))
            .catch(err => console.error(err));
            //step('done');
    };
    const dontUseHandle = () => step('dont');

    return (
        <>
            <h2 className={styles.title}>Connect to customer support email</h2>
            <p className={styles.text}>Allows Chad to send automated responses on your behalf from your usual support mailbox</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <svg className={styles.svg__label}>
                        <use href={svgPath.check + "#check"}></use>
                    </svg>
                    <div className={styles.item__into}>
                        <h3 className={styles.item__title}>Contextual responses</h3>
                        <p className={styles.item__text}>Custom responses to any support situation from “where’s my stuff?” to “I want a refund”</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <svg className={styles.svg__label}>
                        <use href={svgPath.check + "#check"}></use>
                    </svg>
                    <div className={styles.item__into}>
                        <h3 className={styles.item__title}>Reply from anywhere</h3>
                        <p className={styles.item__text}>Respond to your customers via email or Chad chat—it’s all saved in the same thread</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <svg className={styles.svg__label}>
                        <use href={svgPath.check + "#check"}></use>
                    </svg>
                    <div className={styles.item__into}>
                        <h3 className={styles.item__title}>Categorical inbox tags</h3>
                        <p className={styles.item__text}>Tags your emails by category so you know what to expect before even opening an email</p>
                    </div>
                </li>
            </ul>
            <button className={styles.button} type='button' onClick={doneHandle}>Connect Gmail account</button>
            <button className={styles.button__dont} type='button' onClick={dontUseHandle}>I dont use Gmail</button>
        </>
    )
};

export default GoogleConnect;