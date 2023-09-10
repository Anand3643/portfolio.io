import React from 'react';
import './navbar.css';

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
        {/* <img src={logo} alt="" className="logo" /> */}
        <h3>PORTFO<span className='span1'>LIO</span> </h3>
        <div className="desktopmenubtn">

           <Link  activeClass='active' to='Intro' smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
           
           <Link activeClass='active' to='About' smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link> 
           <Link activeClass='active' to='Project' smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Project</Link>
           <Link activeClass='active' to='Certificate' smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Certificate</Link>

        </div>
       
    </nav>
  )
}

export default Navbar
