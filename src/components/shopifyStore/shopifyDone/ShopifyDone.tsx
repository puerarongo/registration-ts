import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../formContext/formProvider';
import styles from './ShopifyDone.module.css';
import picturePath from '../../../services/picturePath';

interface IShopifyDone {
  step: number;
  setStep: Function;
  setShopifyStep: Function;
}

const ShopifyDone: React.FC<IShopifyDone> = ({
  step,
  setStep,
  setShopifyStep,
}) => {
  const { setShopify, setPageStatus } = useContext(FormContext);

  useEffect(() => {
    setPageStatus(true);
  }, [setPageStatus]);

  const clickHandle = () => {
    setStep(step - 1);
    setShopifyStep('connect');
    setShopify('');
  };

  return (
    <>
      <img
        className={styles.img}
        src={picturePath.checkMark}
        alt="check mark"
      />
      <h2 className={styles.title}>Response received</h2>
      <p className={styles.text}>
        Thank you for your interest in Chad! Well be hard at work building
        integrations to support your platform.
      </p>
      <button className={styles.button} type="button" onClick={clickHandle}>
        Done
      </button>
    </>
  );
};

export default ShopifyDone;
