import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FormProvider } from './formContext/formProvider';
import Registration from './registration/Registration';
import Login from './login/Login';
import NotFoundComponent from './notFound/NotFound';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <FormProvider>
              <Registration />
            </FormProvider>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </>
  );
};

export default App;
