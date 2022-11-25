import React, { useState } from 'react';
import '../RealEstate.css'

export default function GeneralInfo({ nextStep, handleFormData, prevStep, values }) {


const submitFormData = (e) => {
    e.preventDefault();

      nextStep();
  
  };

  return (
  <>
    <div className='card'>
    <form method='POST' action='#'  onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Owner</label>
            <select name='owner'>
                <option value="#">Owner</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Mobile</label>
            <input 
                type="text" 
                name="mobile" 
                placeholder='Enter Mobile Number'
                value={values.mobile || ""} 
                onChange={handleFormData("mobile")}
            />
        </div>
        <div className='formInput'>
            <label>Posted By</label>
            <select name='postedBy'>
                <option value="#">Posted By</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Sale Type</label>
            <select name='sale'>
                <option value="#">Please Select</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Featured Package</label>
            <select name='featuredPackage'>
                <option value="#">Please Select</option>
            </select>
        </div>
        <div className='formInput'>
            <label>PPD Package</label>
            <select name='ppdPackage'>
                <option value="#">Please Select</option>
        </select>
        </div>
        <div className='formInput'>
            <span className='eclipseCamera'>
                
                <img src='/images/camera.png' alt='camera' className='camera'/>
            </span>
            <span className='cameraText'>Add Photo</span>
        </div>
        <br/>
        <div className='formInput'>
            
                <button className='cancelBtn' onClick={prevStep}>Cancel</button>
                
        </div>
        <div className='formInput'>
            
                <button className='saveBtn' type='submit'>Save & Continue</button>
                
        </div>
        </section>
        
    </form>
    </div>
    </>
  )
}
