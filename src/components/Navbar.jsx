import React from 'react';
import "./Navbar.css";
import logo from '../images/logo_kasa.svg';

function Navbar() {
  return <nav className='navbar'>
    <div className='navbar__logo'>
      <img src={logo} alt='logo'/>
    </div>
    <div>Accueil</div>
    <div>A propos</div>
  </nav>
    
}

export default Navbar;
