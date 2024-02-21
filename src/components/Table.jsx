import {useState} from 'react'
import PropTypes from 'prop-types'

import TableData from './TableData';
import Search from './searchFormData';


function Table ({tableData}){  

    const [search, setSearch] = useState("");
    
   

    const itemsToDisplay = tableData.filter((data)=>{

        if(search ===" "){

            return true;
        }else {

            return data.description.includes(search);
        }

        
    })

    // onSearch 
function handleSearch(e){
    setSearch(e.target.value);    
  }
  
    return(
        <div className="container">
            <Search search = {search} onSearchChange = {handleSearch}/>
            <table className="table">
            <caption className="caption | uppercase">table of transactions</caption>
            
            <thead>
                <tr>
                    <th className="fs-tertiary-heading fw-semi-bold uppercase">transaction number </th>
                    <th className="fs-tertiary-heading fw-semi-bold uppercase">date </th>
                    <th className="fs-tertiary-heading fw-semi-bold uppercase"> description </th>
                    <th className="fs-tertiary-heading fw-semi-bold uppercase">category </th>
                    <th className="fs-tertiary-heading fw-semi-bold uppercase">amount</th>
                </tr>
            </thead>
            
            <tbody>
                {/* Place Table Data Here */}
                
                {itemsToDisplay.map((data => <TableData key ={data.id} {...data}/>))}

            </tbody>
            </table>

        </div>
    )

}

export default Table;

Table.propTypes = {
    tableData: PropTypes.array
}