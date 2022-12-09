import React from 'react';
import { Route, Routes } from "react-router-dom";
import { FormProvider } from './formContext/formProvider';
import Registration from './registration/Registration';
import Login from './login/Login';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <FormProvider>
            <Registration />
          </FormProvider>
        } />
        <Route path="login" element={ <Login /> }/>
      </Routes>
    </>
  );
}

export default App;
