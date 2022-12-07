import React from "react";
import styles from './ErrorPage.module.css';

const ErrorPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Too many requests, please try again later!</h2>
        </div>
        
    )
}

export default ErrorPage;