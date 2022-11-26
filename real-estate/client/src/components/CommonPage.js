import React from 'react';
import './RealEstate.css';

function CommonPage({children}) {

    return (
        <section className='property'>
            <aside className='asideLeft'>
                <div><img className='logo' src='/images/logo.png' alt='Logo' /></div>
                <ul className='data'>
                    <li><b>Property</b></li>
                    <li>Assistance</li>
                    <li>Received Interest</li>
                    <li>Send Interest</li>
                    <li>Property Views</li>
                    <li>Tariff Plan</li>
                </ul>
            </aside>
            <aside className='asideRight'>
                <header className='header'>
                    <div>USER ID :</div>
                    <div>User Name</div>
                </header>
                <div className='commonPage'>
                    {children}
                </div>
            </aside>

        </section>
    )
}

export default CommonPage