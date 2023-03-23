import {React,useState }from 'react';
import {Link} from 'react-router-dom';


import './MainNavigation.css';
import './MainHeader.js';
import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../Backdrop';


const MainNavigation = props => {
  const[drawerIsOpen , setDrawerIsOpen] = useState(false);

  const handleClick = () =>{
    setDrawerIsOpen(true)
  }

  const closeDrawer = () =>{
    setDrawerIsOpen(false)
  }
   return (
   <div>
    {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
     
    <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks/>
      </nav>
      
    </SideDrawer>
 
    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={handleClick} >
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/' >YourPlaces</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks/>
        </nav>
    </MainHeader>
    </div>
   )
};

export default MainNavigation;