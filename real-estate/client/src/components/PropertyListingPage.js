import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonPage from './CommonPage';
import './RealEstate.css';

function PropertyListingPage() {
    //to search PPDID
    const [ppdId, setPPDID] = useState("");
    const [status, setStatus] = useState("Unsold");
    //fetch data
    const [propertyList,setPropertyList] = useState({
        property:[]
    });
    const changeStatus = () => {
        if(status==="Unsold"){
            setStatus("Sold")
        }else{
            setStatus("Unsold")
        }
        
    }
    
    const getPropertyDetails = async(e) =>{
        e.preventDefault();
        console.log(ppdId)
        await fetch("/property/:ppdid",{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then(result=>setPropertyList(result));

        console.log(propertyList)
    }
    const getAllListedPropeties = async()=>{
        await fetch("/property",{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then(result=>setPropertyList(result));
    };

    useEffect(()=>{
        getAllListedPropeties()
    },[]);

    return (
        <>
            <CommonPage>
                <div className='operations'>
                    <div id="PPDID">
                        <form action="" method='GET' onSubmit={getPropertyDetails}>
                            <input className='searchinput' type="text" value={ppdId} name="searchPPD" placeholder='Search PPD ID' onChange={(e) => setPPDID(e.target.value)} />
                            <button className='searchbtn'>Search</button>
                        </form>
                    </div>
                    <button className='addPropertybtn'>
                     <Link to={"/basic_info"}>+ Add Property</Link> 
                    </button>
                </div>

                <table className='property-table'>
                    <tr className='tableHeader'>
                        <th>PPD ID</th>
                        <th>Image</th>
                        <th>Property</th>
                        <th>Contact</th>
                        <th>Area</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>Days Left</th>
                        <th>Action</th>
                    </tr>
                    {propertyList.property.length > 0 ?
                        <tr className='tableData'>
                            <td>PPD 1125</td>
                            <td>Image</td>
                            <td>House</td>
                            <td>8830226189</td>
                            <td>1200</td>
                            <td>02</td>
                            <td><button onClick={changeStatus}>{status}</button></td>
                            <td>35</td>
                            <td>Action</td>
                        </tr>
                        : <tr> <td colspan="9" className='noList'>No Properties Available. Please Add Properties</td></tr>}
                </table>
            </CommonPage>
        </>
    )
}

export default PropertyListingPage