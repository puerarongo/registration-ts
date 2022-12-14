import React, { useContext, useState } from 'react';
import styles from './Welcome.module.css';
import IStepPage from '../../types/typeStepPage';
import Media from 'react-media';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { FormContext } from '../formContext/formProvider';
import svgPath from '../../services/svgPath';
import { registrationValidationSchema } from '../../services/yupValidation/registrationValidationSchema';

// ??? Material UI
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField } from '@mui/material';
import {
  passwordFieldStyle,
  errPasswordFieldStyle,
} from '../../services/muiStyled/stepLabelStyle';

interface IWelcome extends IStepPage {
  funcActive: Function;
}

const Welcome: React.FC<IWelcome> = ({ step, setStep, funcActive }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    setWelcomeActive,
  } = useContext(FormContext);

  return (
    <div className={styles.container}>
      <Media queries={{ large: '(min-width: 1350px)' }}>
        {media => (
          <>
            {media.large && (
              <svg className={styles.svg__label}>
                <use href={svgPath.label + '#label'}></use>
              </svg>
            )}
          </>
        )}
      </Media>
      <h1 className={styles.main__title}>Welcome to Chad</h1>
      <p className={styles.text}>
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </p>
      <Formik
        initialValues={{
          email: email,
          name: name,
          password: password,
        }}
        validationSchema={registrationValidationSchema}
        onSubmit={values => {
          const { email, name, password } = values;
          setEmail(email);
          setName(name);
          setPassword(password);
          setStep(step + 1);
          funcActive(true);
          setWelcomeActive(true);
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.label}>Email</p>
            <input
              className={
                errors.email && touched.email
                  ? styles.input__error
                  : styles.input
              }
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
            <p className={styles.label}>Name</p>
            <input
              className={
                errors.name && touched.name ? styles.input__error : styles.input
              }
              type="name"
              placeholder="Mega Chad"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && touched.name ? (
              <p className={styles.error__count}>{`${errors.name}`}</p>
            ) : (
              <span className={styles.default__count}></span>
            )}
            <p className={styles.label}>Password</p>
            <div className={styles.password__container}>
              <TextField
                sx={{
                  '& fieldset': { border: 'none' },
                  ...(errors.password && touched.password
                    ? {
                        ...errPasswordFieldStyle,
                      }
                    : {
                        ...passwordFieldStyle,
                      }),
                }}
                className={styles.input__password}
                autoComplete="new-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="enter password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                  style: { fontFamily: "'Inter', sans-serif" },
                  endAdornment: (
                    <>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <Visibility sx={{ color: '#32ABF2' }} />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </>
                  ),
                }}
              />
            </div>
            {errors.password && touched.password ? (
              <p className={styles.error__count}>{`${errors.password}`}</p>
            ) : (
              <span className={styles.default__count}></span>
            )}
            <button
              className={styles.button}
              type="submit"
              onClick={() => {
                touched.email = true;
                touched.name = true;
                touched.password = true;
              }}
            >
              Create account
            </button>
            <p className={styles.text__link}>
              Already have an account?
              <Link className={styles.link} to="login">
                Login
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};
//onClick={() => clickHandler(values.email, values.name, values.password)}
export default Welcome;
