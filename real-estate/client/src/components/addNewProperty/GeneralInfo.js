import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";
import location_info from './LocationInfo';
import property_detail from './PropertyDetail';

export default function GeneralInfo() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <div className='card'>
    <form method='POST' action='#' onSubmit={handleSubmit}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Name</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Owner</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Mobile</label>
            <input 
                type="text" 
                name="mobile" 
                placeholder='Enter Mobile Number'
                value={inputs.mobile || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Posted By</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Posted By</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Sale Type</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Please Select</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Featured Package</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Please Select</option>
            </select>
        </div>
        <div className='formInput'>
            <label>PPD Package</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Please Select</option>
        </select>
        </div>
        <div className='formInput'>
            <div>Add Photo</div>
        </div>
        
        </section>
        <div>
        <Link to={"property_detail"}><button className='cancelBtn'>Cancel</button></Link>
            <Link to={"location_info"}><button className='saveBtn'>Save & Continue</button></Link>
        </div>
    </form>
    </div>
  )
}
