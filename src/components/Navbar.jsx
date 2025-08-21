import React from "react";
import { useState } from "react";
import './Navbar.css';


function Navbar () {
    return (
     <div className="Navbar">
      <nav className='navbar'>
        <div className='logo'>Portfolio</div>
        <ul className='nav'>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Projects</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
      </nav>
      </div>
    )
}


export default Navbar;