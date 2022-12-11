import React, { useContext } from 'react';
import { FormContext } from '../formContext/formProvider';
import Media from 'react-media';
import styles from './Sidebar.module.css';
import svgPath from '../../services/svgPath';
import IStepPage from '../../types/typeStepPage';
import SliderComponent from '../slider/SliderComponent';

// ! Material UI
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

// ! Mobile Material UI
import MobileStepper from '@mui/material/MobileStepper';
import { stepLaybleStyle, mobileStepperStyle } from '../../services/stepLabelStyle';

import QontoStepIconRoot from '../../services/iconsVariation';
import { StepIconProps } from '@mui/material/StepIcon';
import CheckCircle from '@mui/icons-material/Check';


interface ISidebar extends IStepPage {
    active: boolean
};

const Sidebar: React.FC<ISidebar> = ({ step, setStep, active }) => {
    const labelesArray: string[] =
        ["Welcome", "Connect your Shopify store", "Connect your customer support email", "Done"];
    const { shopify, google } = useContext(FormContext);

    const QontoStepIcon = (props: StepIconProps) => {
        const { active, completed, className } = props;
    
        return (
            <QontoStepIconRoot ownerState={{ active }} className={className}>
                {completed ? (
                    <CheckCircle className="QontoStepIcon-completedIcon" />
                ) : active ? (
                <div className="QontoStepIcon-circleActive" />
            ) : (
                <div className="QontoStepIcon-circle" />            
            )}
            </QontoStepIconRoot>
        );
    };


    const prevStep = (): void => {
        setStep(step - 1);
    };
    const nextStep = (): void => {
        setStep(step + 1);
    };

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
        <Media queries={{ small: '(max-width: 1349px)', large: '(min-width: 1350px)' }}>
            {matches => (
            <>  {matches.small && (
                <div className={styles.container}>
                    <svg className={styles.svg__label}>
                        <use href={svgPath.label + "#label"}></use>
                    </svg>
                    <p className={styles.step__identify}>Step {step} of 4</p>
                    <MobileStepper
                        variant="progress"
                        steps={5}
                        position="static"
                        activeStep={step}
                        sx={{padding: "8px 0", ...mobileStepperStyle}}
                        nextButton={
                            <Button sx={{display: "none"}}></Button>}
                        backButton={
                            <Button sx={{display: "none"}}></Button>}
                    />    
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
                </div> )}
                {matches.large && (
                    <div className={styles.large__container}>
                        <Box sx={{ width: '100%' }} >
                            <Stepper sx={stepLaybleStyle}  activeStep={step - 1} orientation="vertical">
                                        {labelesArray.map(( elem: string, index: number ) => (
                                    <Step key={index} sx={stepLaybleStyle}>
                                        <StepLabel StepIconComponent={QontoStepIcon} sx={stepLaybleStyle}>
                                            {elem}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        {active && (
                        <div className={styles.switch__container}>
                            <button className={styles.switch__left} type='button' onClick={() => prevStep()}
                                disabled={isDisabledPrev()}>
                                <svg className={styles.svg__left}>
                                    <use href={svgPath.larrow_left + "#larrow_left"}></use>
                                </svg>
                                Back
                            </button>
                    
                            <button className={styles.switch__right} type='button' onClick={() => nextStep()}
                                disabled={isDisabledNext()}>
                                Next
                                <svg className={styles.svg__right}>
                                    <use href={svgPath.larrow_right + "#larrow_right"}></use>
                                </svg>
                            </button>
                        </div>
                    )}
                        </Box>
                        <div className={styles.slider}>
                            <SliderComponent />
                        </div>
                    </div>
                )}
                </>
            )}
        </Media>
        </section>
    )
};

export default Sidebar;