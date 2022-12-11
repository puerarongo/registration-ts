import React, { useContext } from 'react';
import { FormContext } from '../formContext/formProvider';
import styles from './Google.module.css';
import IStepPage from '../../types/typeStepPage';
import GoogleConnect from './googleConnect/GoogleConnect';
import GoogleDone from './googleDone/GoogleDone';
import GoogleDont from './googleDont/GoogleDont';

const Google: React.FC<IStepPage> = ({ step, setStep }) => {
    const { googleStep, setGoogleStep } = useContext(FormContext);

    return (
        <div className={styles.container}>
            {googleStep === 'connect' ? <GoogleConnect
                step={step} setStep={setStep} setGoogleStep={setGoogleStep} />
                : googleStep === 'done' ?
                    <GoogleDone step={step} setStep={setStep} setGoogleStep={setGoogleStep} />
                : <GoogleDont setGoogleStep={setGoogleStep} />
            }
        </div>
    )
};

export default Google;