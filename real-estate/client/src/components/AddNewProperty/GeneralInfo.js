import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";
import CommonPage from '../CommonPage';
import PropertyNav from './PropertyNav';

export default function GeneralInfo() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
  <CommonPage>
    <PropertyNav/>
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
            <span className='eclipseCamera'>
                {/* <img src={require("/images/eclipse.png")} alt="select folder"/> */}
                <img src='/images/camera.png' alt='camera' className='camera'/>
            </span>
            <span className='cameraText'>Add Photo</span>
        </div>
        <br/>
        <div className='formInput'>
            <Link style={{textDecoration: 'none'}} to={"/property_detail"}><button className='cancelBtn'>Cancel</button></Link>
        </div>
        <div className='formInput'>
            <Link style={{textDecoration: 'none'}} to={"/location_info"}><button className='saveBtn'>Save & Continue</button></Link>
        </div>
        </section>
        
    </form>
    </div>
    </CommonPage>
  )
}