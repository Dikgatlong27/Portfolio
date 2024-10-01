import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='container'>
        <div className="content">
        <p className='my-name'>Tebogo Dikgatlong</p>
        <h1 style={{color: '#00b132'}}><span style={{color: '#333'}}>I'm a</span> Web Developer</h1>
        <p>Experienced frontend developer with passion for creating virtually stunning and user-friendly websites</p>
        <div className="hero-buttons">
            <a className='hire-me' href="https://wa.me/+27676228529" target="_blank" rel="noopener noreferrer">Hire Me</a>
            <a className='resume' href='#' download="Tebo_resume.pdf">Download CV</a>
        </div> 
        </div>
      
    </div>
  )
}

export default Hero