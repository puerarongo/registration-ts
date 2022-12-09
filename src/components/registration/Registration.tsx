import React, { useState, useContext } from 'react';
import { FormContext } from '../formContext/formProvider';
//import Media from "react-media";
import styles from './Registration.module.css';
import Sidebar from '../sidebar/Sidebar';
import Welcome from '../welcome/Welcome';
import SnopifyStore from '../shopifyStore/ShopifyStore';
import Google from '../google/Google';


const Registration: React.FC = () => {
    const {pageStatus} = useContext(FormContext);
    const [step, setStep] = useState<number>(1);
    const [active, setActive] = useState<boolean>(false);

    return (
        <section className={styles.main}>
            {!pageStatus && (
                <Sidebar step={step} setStep={setStep} active={active} />
            )}
            <div className={styles.section}>
                {step === 1 ? <Welcome step={step} setStep={setStep} funcActive={setActive} />
                    : step === 2 ? <SnopifyStore step={step} setStep={setStep}/>
                    : step === 3 ? <Google step={step} setStep={setStep} />
                    : <h2>Not Found</h2>
                }
            </div>
        </section>
    )
    
};

export default Registration;