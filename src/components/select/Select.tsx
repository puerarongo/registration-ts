import React from 'react';
import Select from '@mui/material/Select';
import styles from './Select.module.css';

interface ISelect {
    data: string[]
}

const SelectComponent: React.FC<ISelect> = ({ data }) => {
    return (
        <div className={styles.select}>
            <p className={styles.label}>Platform</p>
            <Select sx={{ height: '45px', width: "100%" }}>
                {data.map((elem: string, index: number) => (
                    <p key={index}>{elem}</p>
                ))}
            </Select>
        </div>
    )
};

export default SelectComponent;