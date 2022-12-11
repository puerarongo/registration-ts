import React, { useState, useContext } from 'react';
import { FormContext } from '../formContext/formProvider';
import Media from 'react-media';
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
            <div className={styles.temporary__container}>
                <Media queries={{ small: '(max-width: 1349px)', large: '(min-width: 1350px)' }}>
                    {media => (
                        <>
                            {media.small && (
                                !pageStatus && (
                                    <Sidebar step={step} setStep={setStep} active={active} />
                                )
                            )}
                            {media.large && (
                                <Sidebar step={step} setStep={setStep} active={active} />
                            )}
                        </>
                    )}
                </Media>
                <div className={styles.section}>
                    {step === 1 ? <Welcome step={step} setStep={setStep} funcActive={setActive} />
                        : step === 2 ? <SnopifyStore step={step} setStep={setStep}/>
                        : step === 3 ? <Google step={step} setStep={setStep} />
                        : <h2>Not Found</h2>
                    }
                </div>
            </div>
        </section>
    )
    
};

export default Registration;