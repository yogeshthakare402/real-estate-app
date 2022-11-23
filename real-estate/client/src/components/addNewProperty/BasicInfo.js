import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";
import PropertyNav from './PropertyNav';
{/*********import view page  */}

export default function BasicInfo() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    setInputs(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <>
    <PropertyNav/>
    <div className='card'>
    <form method='POST' action='#' onSubmit={handleSubmit}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Property Type</label>
            <select value={inputs} onChange={handleChange}>
                <option>Select Property Type</option>
                <option value="Plot">Plot</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Negotable</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Negotable</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Price</label>
            <input 
                type="text" 
                name="price" 
                placeholder='Example:10000'
                value={inputs.price || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Ownership</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Ownership</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Age</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Property Age</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Approved</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Property Approved</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Description</label>
            <input 
            type="text" 
            name="description" 
            value={inputs.description || ""} 
            onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Bank Loan</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Bank Loan</option>
        </select>
        </div>
        
        <div className='formInput'>
            <button className='cancelBtn'>Cancel</button> {/************Add link for view page */}
        </div>
        <div className='formInput'>
            <Link style={{textDecoration: 'none'}} to={"/property_detail"}><button className='saveBtn'>Save & Continue</button></Link>
            </div>
        </section>
        
    </form>
    </div>
    </>
  )
}
