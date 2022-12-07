import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
    return (
        <div className={styles.container}>
            <Oval
                height={200}
                width={200}
                color="#2A3047"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#3A4562"
            />
        </div>
    )
};

export default Loader;