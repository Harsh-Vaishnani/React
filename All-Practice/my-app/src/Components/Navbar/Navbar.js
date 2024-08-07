import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>

            <div className='nav-heading'><p>React Practise</p></div>
            <div className='nav-menu'>

                    <Link className='menu-item' to='/'><p>Practice1</p></Link>
                    <Link className='menu-item' to ='/functionalheader3'><p>Practice2</p></Link>
                    <Link className='menu-item' to = '/todolist'><p>To-do</p></Link>
                    <Link className='menu-item' to = '/signinpage'><p>SignInPage</p></Link>
                    <Link className='menu-item' to = '/apicalling'><p>ApiCall</p></Link>
                    <Link className='menu-item' to = '/searchfilter'><p>SearchBar</p></Link>
                    

            </div>

    </div>
  )
}
