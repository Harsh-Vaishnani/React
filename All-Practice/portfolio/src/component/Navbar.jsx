import React from 'react'
import "./CSS/NavbarCSS.css"
import Logo from "../Images/hv-logo.png"

function Navbar() {
  return (
       
       <header className='header'>
        <nav className='container d-flex justify-content-between '>
            <div>
                <img src={Logo} alt="" width={"100%"} height={"80px"}/>
            </div>
            <div className='nav-menu'>
                <ul className='nav-ul d-flex'>
                    <li><a href="" >HOME</a></li>
                    <li><a href="" >ABOUT</a></li>
                    <li><a href="" >SKILLS</a></li>
                    <li><a href="" >PROJECTS</a></li>
                    <li><a href="" >CONTACT US</a></li>
                </ul>
            </div> 
        </nav>
       </header>
    
  )
}

export default Navbar
