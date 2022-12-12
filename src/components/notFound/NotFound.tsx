import React from 'react';
import styles from './NotFound.module.css';


const NotFoundComponent: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Error 404</h2>
                <p className={styles.text}>This page does not exist</p>
            </div>
        </section>
    );
};

export default NotFoundComponent;