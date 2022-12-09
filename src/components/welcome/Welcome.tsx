import React, {useContext} from 'react';
import styles from './Welcome.module.css';
import IStepPage from '../../types/typeStepPage';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { FormContext } from '../formContext/formProvider';

interface IWelcome extends IStepPage {
  funcActive: Function
}


const Welcome: React.FC<IWelcome> = ({ step, setStep, funcActive }) => {
  const { email, setEmail, name, setName, password, setPassword } = useContext(FormContext);

  //const clickHandler = (email: string, name: string, password: string) => {
  //  setEmail(email);
  //  setName(name);
  //  setPassword(password);
  //  nextStep();
  //};

    return (
      <div className={styles.container}>
        <h1 className={styles.main__title}>Welcome to Chad</h1>
        <p className={styles.text}>Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.</p>
          <Formik
            initialValues={{
            email: email,
            name: name,
            password: password,
            }}
            //validationSchema={a}
            onSubmit={(values) => {
              const { email, name, password } = values;
              setEmail(email);
              setName(name);
              setPassword(password);
              setStep(step + 1);
              funcActive(true);
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
                  placeholder="your@email.com"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p  className={styles.label}>
                  Name
                </p>
                <input
                  className={styles.input}
                  required
                  type="name"
                  placeholder="Name"
                  name="name"
                  value={values.name}
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
                    placeholder='Password'
                    // onCut={disableChange}
                    // onCopy={disableChange}
                    // onPaste={disableChange}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <button className={styles.button} type="submit">
                  Create account
              </button>
              <p className={styles.text__link}>
                Already have an account?
                <Link className={styles.link} to='login'>Login</Link>
              </p>
              </form>
            )}
          </Formik>
        </div>
    )
};
//onClick={() => clickHandler(values.email, values.name, values.password)}
export default Welcome;