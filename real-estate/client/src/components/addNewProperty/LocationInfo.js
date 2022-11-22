import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";
import general_info from './GeneralInfo';

export default function BasicInfo() {
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
            <label>Email</label>
            <input 
                type="text" 
                name="email" 
                placeholder='Email'
                value={inputs.email || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>City</label>
            <select value={inputs} onChange={handleChange}>
                <option>Select City</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Area</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Area</option>
            </select>
        </div>
        
        <div className='formInput'>
            <label>Pincode</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Pincode</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Address</label>
            <input 
                type="text" 
                name="address" 
                placeholder='Address'
                value={inputs.address || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Landmark</label>
            <input 
                type="text" 
                name="landmark" 
                placeholder='Landmark'
                value={inputs.landmark || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Latitude</label>
            <input 
            type="text" 
            name="latitude" 
            placeholder='Latitude'
            value={inputs.latitude || ""} 
            onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Longitude</label>
            <input 
                type="text" 
                name="longitude" 
                placeholder='Longitude'
                value={inputs.longitude || ""} 
                onChange={handleChange}
            />
        </div>
        
        </section>
        <div>
        <Link to={"general_info"}><button className='cancelBtn'>Previous</button></Link>
            <button className='saveBtn'>Add Property</button>
        </div>
    </form>
    </div>
  )
}
