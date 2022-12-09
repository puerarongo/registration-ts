import React, { useContext } from 'react';
import { FormContext } from '../formContext/formProvider';
import styles from './ShopifyStore.module.css';
import IStepPage from '../../types/typeStepPage';
import ShopifyConnect from './shopifyConnect/ShopifyConnect';
import ShopifyConfirmed from './shopifyConfirmed/ShopifyConfirmed';
import ShopifyDone from './shopifyDone/ShopifyDone';
import ShopifyDont from './shopifyDont/ShopifyDont';


const ShopifyStore: React.FC<IStepPage> = ({ step, setStep }) => {
    const { shopifyStep, setShopifyStep } = useContext(FormContext);
    
    return (
        <div className={styles.container}>
            {shopifyStep === 'connect' ? <ShopifyConnect step={setShopifyStep} />
                : shopifyStep === 'confirmed' ? <ShopifyConfirmed step={setShopifyStep} />
                : shopifyStep === 'done' ? <ShopifyDone step={step} setStep={setStep} />
                : <ShopifyDont step={setShopifyStep} />
            }
        </div>
    )
};

export default ShopifyStore;