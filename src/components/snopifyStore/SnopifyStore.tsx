import React, { useContext } from 'react';
import { FormContext } from '../formContext/formProvider';
import styles from './SnopifyStore.module.css';
import IStepPage from '../../types/typeStepPage';
import SnopifyConnect from './snopifyConnect/SnopifyConnect';
import SnopifyConfirmed from './snopifyConfirmed/SnopifyConfirmed';
import SnopifyDone from './snopifyDone/SnopifyDone';
import SnopifyDont from './snopifyDont/SnopifyDont';


const SnopifyStore: React.FC<IStepPage> = ({ step, setStep }) => {
    const { snopifyStep, setSnopifyStep } = useContext(FormContext);
    
    return (
        <div className={styles.container}>
            {snopifyStep === 'connect' ? <SnopifyConnect step={setSnopifyStep} />
                : snopifyStep === 'confirmed' ? <SnopifyConfirmed step={setSnopifyStep} />
                : snopifyStep === 'done' ? <SnopifyDone step={step} setStep={setStep} />
                : <SnopifyDont step={setSnopifyStep} />
            }
        </div>
    )
};

export default SnopifyStore;