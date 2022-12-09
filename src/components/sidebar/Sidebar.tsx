import React, { useContext } from 'react';
import { FormContext } from '../formContext/formProvider';
import styles from './Sidebar.module.css';
import svgPath from '../../services/svgPath';
import IStepPage from '../../types/typeStepPage';

interface ISidebar extends IStepPage {
    active: boolean
};

const Sidebar: React.FC<ISidebar> = ({ step, setStep, active }) => {
    const { shopify, google } = useContext(FormContext);
    
    const prevStep = (): void => setStep(step - 1);
    const nextStep = (): void => setStep(step + 1);

    const isDisabledPrev = () => {
        if (step <= 1) return true
        else return false
    };

    const isDisabledNext = () => {
        if (step === 2 && !shopify) return true
        else if (step === 3 && !google) return true
        else if (step >= 4) return true
        else return false
    };


    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <svg className={styles.svg__label}>
                    <use href={svgPath.label + "#label"}></use>
                </svg>
                <div>ANIMATION PLACE</div>
                {active && (
                    <div className={styles.switch__container}>
                        <button className={styles.switch__left} type='button' onClick={() => prevStep()}
                            disabled={isDisabledPrev()}>
                            <svg className={styles.svg__left}>
                                <use href={svgPath.left_arrow + "#left_arrow"}></use>
                            </svg>
                            Prev
                        </button>
                        
                        <button className={styles.switch__right} type='button' onClick={() => nextStep()}
                            disabled={isDisabledNext()}>
                            Next
                            <svg className={styles.svg__right}>
                                <use href={svgPath.right_arrow + "#right_arrow"}></use>
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
};

export default Sidebar;