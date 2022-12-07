import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import JobList from './jobList/JobList';
import DetailedJob from './detailedJob/DetailedJob';
import NotFound from './notFound/NotFound';
import fetchGenerator from '../services/generatorAPI';
import IDataList from '../types/typeDataList';
import './App.css';


const App: React.FC = () => {
  const [data, setData] = useState<IDataList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  
  useEffect(() => {
    setLoading(true);
    fetchGenerator().then(({ data }) => {
      setData([...data])
    })
      .catch(err => setError(err))
    setLoading(false);  
  }, [setData]);
  

  return (
    <>
      <Routes>
        <Route path="/" element={<JobList data={data} loading={loading} error={error} /> } />
        <Route path="/:jobId" element={<DetailedJob />} />
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </>
  );
}

export default App;
