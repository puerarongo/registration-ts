import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import svgPath from '../../services/svgPath';
import styles from './Login.module.css';
import { loginValidationSchema } from '../../services/yupValidation/loginValidationSchema';

// ??? Material UI 
import { IconButton} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { passwordFieldStyle, errPasswordFieldStyle } from '../../services/muiStyled/stepLabelStyle';



const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
            <svg className={styles.svg__label}>
                <use href={svgPath.label + "#label"}></use>
            </svg>
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.text}>Feeling ready to take on the day? Chad is too!</p>
            <Formik
                initialValues={{
                email: '',
                password: '',
                }}
                validationSchema={loginValidationSchema}
                onSubmit={(values) => {
                    const { email, password } = values;
                    console.log("Login imitation", email, password)
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                <form  className={styles.form} onSubmit={handleSubmit}>
                    <p className={styles.label}>
                        Email
                    </p>
                    <input
                        className={(errors.email && touched.email) ? styles.input__error : styles.input}
                        type="email"
                        placeholder="megachad@trychad.com"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                            />
                    {errors.email && touched.email ? (
                        <p className={styles.error__count}>{`${errors.email}`}</p>
                    ) : (
                        <span className={styles.default__count}></span>
                    )}
                    <p  className={styles.label}>
                        Password
                            </p>
                            <div className={styles.password__container}>
                                <TextField
                                    sx={{
                                        "& fieldset": { border: 'none' },
                                        ...(errors.password && touched.password ?
                                        {
                                            ...errPasswordFieldStyle
                                        } : {
                                            ...passwordFieldStyle
                                        })
                                    }}
                                    className={styles.input__password}
                        autoComplete='new-password'
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='enter password'
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                                    InputProps={{
                            style: { fontFamily: "'Inter', sans-serif", },
                            endAdornment: <>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ?
                                        <Visibility sx={{ color: '#32ABF2' }} /> : <VisibilityOff />
                                    }
                                </IconButton>
                            </>,
                        }}
                    />
                    </div>     
                    {errors.password && touched.password ? (
                        <p className={styles.error__count}>{`${errors.password}`}</p>
                    ) : (
                        <span className={styles.default__count}></span>
                    )}
                    <button className={styles.button} type="submit" onClick={() => {
                            touched.email = true
                            touched.password = true
                        }}>
                        Create account
                    </button>
                    <p className={styles.text__link}>
                        Don’t have an account? Join the waitlist
                    <Link className={styles.link} to='/'>Join the waitlist</Link>
                    </p>
                </form>
            )}
            </Formik>
            </div>
        </section>
    )
};

export default Login;