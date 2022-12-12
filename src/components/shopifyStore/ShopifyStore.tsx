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
      {shopifyStep === 'connect' ? (
        <ShopifyConnect setShopifyStep={setShopifyStep} />
      ) : shopifyStep === 'confirmed' || shopifyStep === 'already' ? (
        <ShopifyConfirmed
          step={step}
          setStep={setStep}
          shopifyStep={setShopifyStep}
          setShopifyStep={setShopifyStep}
        />
      ) : shopifyStep === 'done' ? (
        <ShopifyDone
          step={step}
          setStep={setStep}
          setShopifyStep={setShopifyStep}
        />
      ) : (
        <ShopifyDont setShopifyStep={setShopifyStep} />
      )}
    </div>
  );
};

export default ShopifyStore;
