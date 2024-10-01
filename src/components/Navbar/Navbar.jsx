import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"


import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <nav className='container'>
          <div className="logo">
              <h3><Link to='/' className='nav-logo'>Tebo</Link></h3>
          </div>
          <ul className="nav-links">
              <Link to='/' className='li'><li>Home</li></Link>
              <Link to='/about' className='li'><li>About</li></Link>
              <Link to='/projects' className='li'>Projects</Link>
              <Link to='/contact' className='li'>Contact</Link>
          </ul>
      </nav>

      <div className="mobile-nav">
        <RxHamburgerMenu className='ham-menu' onClick={() => setToggleMenu(true)} />
        <div className="logo-mobile">
          <h3><Link to='/' className='nav-logo-mobile'>Tebo</Link></h3>
        </div>

        {toggleMenu && (
          <div className="nav-overlay box-shadow slide-rotate-hor-top">
            <IoMdClose className='close-menu' onClick={() => setToggleMenu(false)} />

            <ul className="nav-links-mobile">
              <Link to='/' className='li' onClick={() => setToggleMenu(false)}><li>Home</li></Link>
              <Link to='/about' className='li' onClick={() => setToggleMenu(false)}><li>About</li></Link>
              <Link to='/projects' className='li' onClick={() => setToggleMenu(false)}><li>Projects</li></Link>
              <Link to='/contact' className='li' onClick={() => setToggleMenu(false)}><li>Contact</li></Link>
            </ul>  
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
