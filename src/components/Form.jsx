import {useState} from 'react';

import PropTypes from 'prop-types'

function Form ({tableData,setTableData , getNextId,}){
    const [formData, setFormData] = useState({
        id: getNextId(),
        date:"",
        description:"",
        category:"",
        amount:""

    });
    
    
    
    function handleSubmit(e){

        e.preventDefault()
        setTableData([...tableData,formData]);
    }

    function handleOnChange (e){
 
        const name = e.target.name;
        const value = e.target.value;
        
        setFormData({
            ...formData,
            [name] : value,
                    })
        console.log(value);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className ="flex flex-column form bg-primary-100" >
                <div className ="flex flex-column form-elements-wrapper">
                    <label className ="uppercase" htmlFor="date"> date of transaction</label>
                    <input 
                    value={formData.date}
                    onChange={handleOnChange}
                    className = "form-input" 
                    type="text" 
                    name="date" 
                    required />
                </div>
                <div className ="flex flex-column form-elements-wrapper">
                    <label className ="uppercase" htmlFor="description">description of transaction</label>
                    <input 
                    value={formData.description}
                    onChange={handleOnChange}
                    className = "form-input" 
                    type="text" 
                    name="description"  
                    required />
                </div>
                <div className ="flex flex-column form-elements-wrapper">
                    <label className ="uppercase" htmlFor="category">category of transaction</label>
                    <input 
                    value={formData.category}
                    onChange={handleOnChange}
                    className = "form-input" 
                    type="text" 
                    name="category" 
                    required />
                </div>
                <div className ="flex flex-column form-elements-wrapper">
                    <label className ="uppercase" htmlFor="amount">transaction amount</label>
                    <input 
                    value={formData.amount}
                    onChange={handleOnChange}
                    className = "form-input" 
                    type="text" 
                    name="amount" 
                    required />
                </div>
                <div className='form-btn-wrapper'>
                    <input                     
                    className = "form-btn capitalize" 
                    type="submit" 
                    value="submit" />
                </div>
            </form>
        </div>
    );
}

export default Form;

Form.propTypes ={
    tableData : PropTypes.array,
    setTableData : PropTypes.func,
    getNextId: PropTypes.func,
}