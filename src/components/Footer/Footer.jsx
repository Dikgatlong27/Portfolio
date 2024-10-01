import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import './Footer.css'

const Footer = () => {
  return (
    <footer className='container'>
      <ul className="footer-links">
        <Link to='/' className='li'><li>Home</li></Link>
        <Link to='/about' className='li'><li>About</li></Link>
        <Link to='/projects' className='li'>Projects</Link>
        <Link to='/contact' className='li'>Contact</Link>
      </ul>
      <p>copyright &#169; 2024 Tebogo Dikgatlong All Rights Reserved</p>
      <div className="get-in-touch">
        <h4 className="icon">Find Me</h4>
        <div className="icons">
          <FaLinkedinIn className='icon' />
          <FaGithub className='icon' />
          <FaWhatsapp className='icon' />
          <MdCall className='icon' />
          <MdOutlineMailOutline className='icon' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
