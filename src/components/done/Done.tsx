import React from 'react';
import styles from './Done.module.css';

const DoneComponent: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>You’re ready to go! 🚀</h2>
            <p className={styles.text}>
                A fully loaded self-service portal is now ready to deploy on your Shopify store.
            </p>
            <p className={styles.text}>
                A fully loaded self-service portal is now ready to deploy on your Shopify store. We’ve programmed it to follow industry best practices for shipping, return & exchange, and payment policy.
            </p>
            <p className={styles.text}>
                You can customize these settings to fit your store policy anytime. 
            </p>
            <p className={styles.text}>
                Lastly, 
                <strong className={styles.strong}>
                    nothing is live until you hit “Go Live”!
                </strong>
            </p>
            <button className={styles.button} type='button'>Start customizing</button>
        </div>
    )
};

export default DoneComponent;