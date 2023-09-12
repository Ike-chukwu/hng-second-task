import React from 'react'
import './Navbar.scss'
import logo from "../../tv.png"

const Navbar = () => {
  return (
    <nav>
        <div className="logo-details">
            <img src={logo} alt="" />
            <span className="orgName">MovieBox</span>
        </div>

        <div className="search">
            <input type="text" placeholder='What do you want to watch?'/>
            <i className="fas fa-search"></i>
        </div>


        <div className="far-right">
            <span className="sign-in">Sign in</span>
            <i className="fas fa-bars"></i>
        </div>
    </nav>
  )
}

export default Navbar