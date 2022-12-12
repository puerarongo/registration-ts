import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import svgPath from '../../services/svgPath';
import styles from './Login.module.css';
import { loginValidationSchema } from '../../services/yupValidation/loginValidationSchema';

const Login: React.FC = () => {
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
                        required
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
                    <input
                        className={(errors.password && touched.password) ? styles.input__error : styles.input}
                        required
                        autoComplete='new-password'
                        name='password'
                        type='password'
                        placeholder='Enter password'
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
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