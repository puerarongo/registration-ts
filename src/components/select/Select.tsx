import React from 'react';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from './Select.module.css';

interface ISelect {
    data: string[];
    value: string;
    setValue: Function;
}

const SelectComponent: React.FC<ISelect> = ({ data, value, setValue}) => {
    const selectChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };
    
    return (
        <div className={styles.select}>
            <p className={styles.label}>Platform</p>
            <Select
                sx={{ height: '45px', width: "100%" }}
                value={value}
                onChange={selectChange}
            >
                {data.map((elem: string, index: number) => (
                    <MenuItem key={index} value={index + 1}>{elem}</MenuItem>
                ))}
            </Select>
        </div>
    )
};

export default SelectComponent;