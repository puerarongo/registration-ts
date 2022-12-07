import React from "react";
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
    return (
        <>
            <h2 className={styles.title}>Error 404. Page is Not Found!</h2>
        </>
    )
}

export default NotFound;