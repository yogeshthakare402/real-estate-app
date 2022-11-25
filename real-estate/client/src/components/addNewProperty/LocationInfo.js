import React, { useState } from 'react';
import '../RealEstate.css'
import axios from 'axios';

export default function LocationInfo({ nextStep, handleFormData, prevStep, values }) {


const submitFormData = (e) => {
    e.preventDefault();

     
    axios
        .post("http://localhost:8080/add_property", values
        // , {headers: {
        //     "Content-Type": "multipart/form-data",
        //   },}
        )
        .then((res) => {
        //   console.log(res);
        })
        .catch((err) => {
        //   console.log(err);
        });

        nextStep();
  };

  return (
    <>
    
    <div className='card'>
    <form method='POST' action='#' onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Email</label>
            <input 
                type="text" 
                name="email" 
                placeholder='Email'
                // value={inputs.email || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>City</label>
            <select name='city'>
                <option>Select City</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Area</label>
            <select name='area'>
                <option value="#">Select Area</option>
            </select>
        </div>
        
        <div className='formInput'>
            <label>Pincode</label>
            <select name='pincode'>
                <option value="#">Select Pincode</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Address</label>
            <input 
                type="text" 
                name="address" 
                placeholder='Address'
                // value={inputs.address || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Landmark</label>
            <input 
                type="text" 
                name="landmark" 
                placeholder='Landmark'
                // value={inputs.landmark || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Latitude</label>
            <input 
            type="text" 
            name="latitude" 
            placeholder='Latitude'
            // value={inputs.latitude || ""} 
            // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Longitude</label>
            <input 
                type="text" 
                name="longitude" 
                placeholder='Longitude'
                // value={inputs.longitude || ""} 
                // onChange={handleChange}
            />
        </div>
        <div  className='formInput'>
           
                <button className='cancelBtn' onClick={prevStep}>Previous</button>
           
        </div>
        <div className='formInput'>
           
                <button className='saveBtn' type='submit'>Add Property</button>
            
        </div>
        </section>
        
    </form>
    </div>
    </>
  )
}
