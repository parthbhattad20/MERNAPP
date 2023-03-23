import React from 'react';

import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = props =>{
    return (
       <ul className='nav-links'>
         <li>
            <NavLink to="/" exact>All Users</NavLink>
         </li>
         <li>
            <NavLink to="/u1/places">My Places</NavLink>
         </li>
         
         <li>
            <NavLink to="places/newplace">Add Places</NavLink>
         </li>
         <li>
            <NavLink to="/auth">Authenticate</NavLink>
         </li>
       </ul>
    )
}

export default NavLinks;