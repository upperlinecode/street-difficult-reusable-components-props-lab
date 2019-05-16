import React from 'react';
import building from './images/building.png'
import './Navbar.css';

const Navbar = () => {
  return(
    <div className="navbar">
      <img className="logo" src={building}/>
      <p className="company">StreetHard</p>
    </div>
  )
}

export default Navbar