import React from 'react';
import { Route, Routes } from "react-router-dom";
import Registration from './registration/Registration';


const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Registration /> }/>
      </Routes>
    </>
  );
}

export default App;
