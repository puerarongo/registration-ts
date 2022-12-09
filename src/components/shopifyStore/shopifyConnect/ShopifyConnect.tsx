import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from './ShopifyConnect.module.css';
import svgPath from '../../../services/svgPath';
import IShopifyPage from '../../../types/typeShopifyStep';
import { shopifyGet } from '../../../services/authAPI';


const ShopifyConnect: React.FC<IShopifyPage> = ({ step }) => {
    const { setShopify, setPageStatus } = useContext(FormContext);

    useEffect(() => { setPageStatus(false) }, [setPageStatus]);

    const connectHandle = async () => {
            step('confirmed');
        await shopifyGet('Axios')
            .then(res => setShopify(res.data.token))
            .catch(err => console.error(err));
            //step('confirmed');
    };
    const dontUseHandle = () => step('dont');

    return (
        <>
            <h2 className={styles.title}>Connect to Shopify Store</h2>
            <p className={styles.text}>Installs the Chad widget in your Shopify store and sets it up to display your customers order information and self-serve options.</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <svg className={styles.svg__label}>
                        <use href={svgPath.check + "#check"}></use>
                    </svg>
                    <div className={styles.item__into}>
                        <h3 className={styles.item__title}>Track orders and shipping</h3>
                        <p className={styles.item__text}>Global coverage with 600+ couriers supported</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <svg className={styles.svg__label}>
                        <use href={svgPath.check + "#check"}></use>
                    </svg>
                    <div className={styles.item__into}>
                        <h3 className={styles.item__title}>Manage orders</h3>
                        <p className={styles.item__text}>Allow customers to track, return, exchange, or report problems with their orders</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <svg className={styles.svg__label}>
                        <use href={svgPath.check + "#check"}></use>
                    </svg>
                    <div className={styles.item__into}>
                        <h3 className={styles.item__title}>Process returns and exchanges</h3>
                        <p className={styles.item__text}>Automatically checks your store policy and existing inventory before resolving or escalating each request</p>
                    </div>
                </li>
            </ul>
            <button className={styles.button} type='button' onClick={connectHandle}>Connect store</button>
            <button  className={styles.button__dont} type='button' onClick={dontUseHandle}>I dont use Shopify</button>
        </>
    )
};

export default ShopifyConnect;