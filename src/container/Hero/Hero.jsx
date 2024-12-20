import React from 'react'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container container'>
        
        <div className="content">
            <p className='my-name'>Tebogo Dikgatlong</p>
            <h1 id='heading' style={{color: '#00b132', fontSize: '3vmax', marginBottom: '1rem'}}><span style={{color: '#333'}}>I'm a</span> Web Developer</h1>
            <p>Experienced frontend developer with passion for creating virtually stunning and user-friendly websites</p>
            <div className="hero-buttons">
                <a className='hire-me' href="https://wa.me/27676228529" target="_blank" rel="noopener noreferrer">Hire Me</a>
                <a className='resume' href='/resume.pdf'>Download CV</a>
            </div> 
            <div className="social">
                <a href="https://github.com/Dikgatlong27" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/tebogo-dikgatlong/" target="_blank" rel="noopener noreferrer">
                    <ImLinkedin className="social-icon" />
                </a>
            </div>
        </div>

        
        <a href='pp.png' download='MyProPic.png' className="pro-pic">
            <img src="pp.png" alt="Profile Pic" srcset="" />
        </a>
        
    </div>
  )
}

export default Hero
