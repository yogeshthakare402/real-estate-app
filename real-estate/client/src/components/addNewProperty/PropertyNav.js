import React from 'react';
import '../RealEstate.css';
// import {NavLink} from 'react-router-dom';
import {
Nav,
NavLink,
NavSpan,
Bars,
NavMenu
} from './PropertyNavElements';

export default function PropertyNav() {
return (
	<>
    {/* <ul>
        <li><NavLink class="active" to="/basic_info" className="link">Home</NavLink></li>
        <li><NavLink to="/property_detail" >News</NavLink></li>
        <li><a href="#contact" className="link">Contact</a></li>
        <li><a href="#about" className="link">About</a></li>
    </ul> */}

	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/basic_info'>
			<NavSpan to='/basic_info'>1</NavSpan>Basic Info
		</NavLink>
		<NavLink to='/property_detail'>
            <NavSpan to='/property_detail'>2</NavSpan>Property Detail
		</NavLink>
		<NavLink to='/general_info'>
            <NavSpan to='/general_info'>3</NavSpan>General Info
		</NavLink>
		<NavLink to='/location_info'>
            <NavSpan to='/location_info'>4</NavSpan>Location Info
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

