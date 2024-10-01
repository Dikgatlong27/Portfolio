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
          <a href="https://www.linkedin.com/in/tebogo-dikgatlong/" target="_blank" rel="noopener noreferrer" className='icon'><FaLinkedinIn /></a>
          <a href="https://github.com/Dikgatlong27" target="_blank" rel="noopener noreferrer" className='icon'><FaGithub /></a>
          <a href="https://wa.me/27676228529?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20experience%20in%20web%20development." target="_blank" rel="noopener noreferrer"><FaWhatsapp className='icon' /></a>
          <a href="tel:+27676228529" target="_blank" rel="noopener noreferrer" className='icon'><MdCall /></a>
          <a href="mailto:tpdikgatlong@gmail.com" target="_blank" rel="noopener noreferrer" className='icon'><MdOutlineMailOutline /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
