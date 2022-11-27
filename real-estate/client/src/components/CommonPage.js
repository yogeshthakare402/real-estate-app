import React from 'react';
import './RealEstate.css';

function CommonPage({children}) {

    return (
        <section className='property'>
           
            <aside className='asideLeft'>
                <div><img className='logo' src='/images/logo.png' alt='Logo' /></div>
                <ul className='data'>
                    <li>
                        <img src='/images/property.png'  alt='property'/>
                        <b>Property</b></li>
                    <li>
                    <img src='/images/assistance.png'  alt='assistance'/>
                        Assistance</li>
                    <li>
                    <img src='/images/received_interest.png'  alt='received_interest'/>
                        Received Interest</li>
                    <li>
                    <img src='/images/sent_interest.png'  alt='sent_interest'/>
                        Send Interest</li>
                    <li>
                    <img src='/images/property_view.png'  alt='property_view'/>
                        Property Views</li>
                    <li>
                    <img src='/images/tariff_plan.png'  alt='tariff_plan'/>
                        Tariff Plan</li>
                </ul>
            </aside> 
            <div className='head'></div>
             <aside className='asideRight'>
                <header className='header'>
                    <div className='header-id'>USER ID :</div>
                    <div className='header-username'>
                    <img src='/images/username.png'  alt='username'/>
                        <span>User Name</span></div>
                </header>
                <div className='commonPage'>
                    {children}
                </div>
            </aside>

        </section>
    )
}

export default CommonPage