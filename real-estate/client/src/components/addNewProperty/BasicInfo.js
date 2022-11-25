import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";
{/*********import view page  */}

export default function BasicInfo({ nextStep, handleFormData, values }) {
const submitFormData = (e) => {
    e.preventDefault();
    
      nextStep();
   
  };


  return (
    <>
    
    
    <div className='card'>
    <form method='POST' action='#' onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Property Type</label>
            <select name="property" value={values.firstName} onChange={handleFormData("property")}>
                <option>Select Property Type</option>
                <option value="Plot">Plot</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Negotable</label>
            <select name='negotable'>
                <option value="#">Select Negotable</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Price</label>
            <input 
                type="text" 
                name="price" 
                placeholder='Example:10000'
                // value={inputs.price} 
            />
        </div>
        <div className='formInput'>
            <label>Ownership</label>
            <select name='ownership'>
                <option value="#">Select Ownership</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Age</label>
            <select name='property_age'>
                <option value="#">Select Property Age</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Approved</label>
            <select name='approved'>
                <option value="#">Property Approved</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Description</label>
            <input 
            type="text" 
            name="description" 
            // value={inputs.description} 
            // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Bank Loan</label>
            <select name='bank loan'>
                <option value="#">Bank Loan</option>
        </select>
        </div>
        
        <div className='formInput'>
            <Link to={"/hello"}>
                <button className='cancelBtn'>Cancel</button> {/************Add link for view page */}
            </Link>
        </div>
        
        <div className='formInput'>
            
                <button type='submit' className='saveBtn'>Save & Continue</button>
            
            </div>
        </section>
        
    </form>
    </div>
    </>
  )
}
