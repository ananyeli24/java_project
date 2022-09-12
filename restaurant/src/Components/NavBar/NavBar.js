import React from 'react'
import logo from '../images/logo.png'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';


export const NavBar = () => {
  const [toggleVisibility, setToggleVisibility] = useState(true)

const toggleMenu = () => {
toggleVisibility ?  setToggleVisibility(false) : setToggleVisibility(true)
console.log('inside toggle', toggleVisibility)
}
  return (
    <React.Fragment>
      <nav className="sticky">
      <div id="logo" ><Link to="/"> <img src={logo} alt="logo" height="50" /> </Link>
      
      
      </div>
        <ul className= {toggleVisibility ? 'navbar-links navbar-display-none' : 'navbar-links'}>
          <li className="navbutton"><Link to="/"> <span className="nav_button_hover">Home</span></Link></li>
          <li className="navbutton"><Link to="/Restaurants"><span className="nav_button_hover">Restaurants</span></Link></li>
          <li className="navbutton"><Link to="/Friends"><span className="nav_button_hover">Friends</span></Link></li>
        </ul>

      </nav>
    </React.Fragment>
  )
}
