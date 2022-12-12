import React, { useEffect, useContext, useState } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from '../../shopifyStore/shopifyDont/ShopifyDont.module.css';
import svgPath from '../../../services/svgPath';
import SelectComponent from '../../select/Select';

interface IGoogleDont {
    setGoogleStep: Function
};

const GoogleDont: React.FC<IGoogleDont> = ({ setGoogleStep }) => {
    const [selectValue, setSelectVlaue] = useState<string>('');
    const { setPageStatus } = useContext(FormContext);
    const dataArr = ['Microsoft Outlook', 'Yahoo', 'Brave', 'Other'];

    useEffect(() => { setPageStatus(false) }, [setPageStatus]);

    const clickHandle = () => setGoogleStep('done');
    const returnHandle = () => setGoogleStep('connect');

    return (
        <>
            <svg className={styles.svg__label}>
                <use href={svgPath.label + "#label"}></use>
            </svg>
            <h2 className={styles.title}>Dont use Gmail?</h2>
            <p className={styles.text}>Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform.</p>
            <SelectComponent data={dataArr} value={selectValue} setValue={setSelectVlaue}  />
            <button className={styles.button} type='button' onClick={clickHandle}>Submit</button>
            <p className={styles.text__link}>
                Actually use Gmail?
                <button className={styles.link} type='button' onClick={returnHandle}>Connect</button>
            </p>
        </>
    )
};

export default GoogleDont;