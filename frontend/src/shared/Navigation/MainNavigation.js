import React from 'react';
import {Link} from 'react-router-dom';

import './MainNavigation.css';
import './MainHeader.js';
import MainHeader from './MainHeader.js';


const MainNavigation = props => {
   return (
    <MainHeader>
        <button className='main-navigation__menu-btn'>
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/' >YourPlaces</Link>
        </h1>
    </MainHeader>
   )
};

export default MainNavigation;