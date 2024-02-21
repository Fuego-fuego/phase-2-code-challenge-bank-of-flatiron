import {useEffect, useState} from 'react';

import Form from './Form';
import Table from "./Table"



function App() {
const [tableData, setTableData] = useState([]);

    useEffect(() =>{
      
        fetch('http://localhost:8001/transactions')
        .then(resp => resp.json())
        .then( data => setTableData(data))

    },[])

    const getNextId = () => tableData.length + 1;

    

  return (
    <main className="main | bg-accent-600">
      <h1 className="fs-primary-heading fw-bold uppercase">bank of flatiron</h1>
      <h2 className="fs-secondary-heading fw-bold uppercase">transactions form</h2> 
       <Form  tableData = {tableData} setTableData = {setTableData} getNextId = {getNextId}/> 
      <div className="container">
        <h2 className="fs-secondary-heading fw-bold uppercase">transactions Table</h2> 
      </div>     
         
      <Table tableData = {tableData}/>
    
    </main>

  )
}

export default App

