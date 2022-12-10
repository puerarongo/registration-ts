import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import svgPath from '../../services/svgPath';
import styles from './Login.module.css';

const Login: React.FC = () => {
    return (
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
                //validationSchema={a}
                onSubmit={(values) => {
                    const { email, password } = values;
                    console.log(email, password)
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
                        className={styles.input}
                        required
                        type="email"
                        placeholder="megachad@trychad.com"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <p  className={styles.label}>
                        Password
                    </p>
                    <input
                        className={styles.input}
                        required
                        autoComplete='new-password'
                        name='password'
                        type='password'
                        placeholder='Enter password'
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <button className={styles.button} type="submit">
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
    )
};

export default Login;