

import React, { useState, useEffect } from 'react';
import './App.css';
import response from "./data.json"
import Chart from './Components/Chart'
import { Container } from 'react-bootstrap';
function App() {
 
  const [data, setData] = useState(null);
  useEffect(() => {
    if(setData){
      setData(response)
    }
  }, [setData]);
  return (
    <Container className='mt-3'>
    <div className="App">
     
      <span>
      <h2>Available charts</h2>
      { data && data.charts.map((chartData, i) => (
        <Chart chart={chartData} key={i}/>
      ))}
      </span>
    </div>
    </Container>
      
  );
}
export default App;
