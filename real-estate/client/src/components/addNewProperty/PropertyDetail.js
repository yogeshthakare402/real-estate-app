import React, { useState } from 'react';
import '../RealEstate.css';
import {Link} from "react-router-dom";
import general_info from './GeneralInfo';
import basic_info from './BasicInfo';
import PropertyNav from './PropertyNav';

export default function PropertyDetail() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    
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
            <label>Length</label>
            <input 
                type="text" 
                name="length" 
                placeholder='Example:10000'
                value={inputs.length || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Breadth</label>
            <input 
                type="text" 
                name="breadth" 
                placeholder='Example:10000'
                value={inputs.breadth || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Total Area</label>
            <input 
                type="text" 
                name="area" 
                placeholder='Example:10000'
                value={inputs.area || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Area Unit</label>
            <input 
                type="text" 
                name="areaunit" 
                placeholder='Example:10000'
                value={inputs.areaunit || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>No of BHK</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select No of BHK</option>
            </select>
        </div>
        <div className='formInput'>
            <label>No of Floor</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select No of Floor</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Attached</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Attached</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Western Toilet</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Western Toilet</option>
        </select>
        </div>
        <div className='formInput'>
            <label>Furnished</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Furnished</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Car Parking</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Car Parking</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Lift</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Lift</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Electricity</label>
            <input 
                type="text" 
                name="electricity" 
                placeholder='Example:3 phase'
                value={inputs.electricity || ""} 
                onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Facing</label>
            <select value={inputs} onChange={handleChange}>
                <option value="#">Select Facing</option>
            </select>
        </div>
        <br/>
        <div className='formInput'>
            <Link style={{textDecoration: 'none'}} to={"/basic_info"}><button className='cancelBtn'>Cancel</button></Link>
        </div>
        <div className='formInput'>
            <Link style={{textDecoration: 'none'}} to={"/general_info"}><button className='saveBtn'>Save & Continue</button></Link>
        </div>
        </section>
        
    </form>
    </div>
    </>
  )
}
