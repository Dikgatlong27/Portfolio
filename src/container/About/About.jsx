import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className='about-section container flex-col'>
      <h1>About Me</h1>
      <div className="about-info flex-space">
        <div className="content">
            <h3>My Introduction</h3>
            <p>I’m a self-taught front-end web developer with a passion for building visually engaging and interactive web applications. My journey in web development began in 2021, starting with HTML, CSS, and JavaScript, and I have since upgraded my skills to specialize in React.js. I thrive in creating user-friendly interfaces with modern web technologies and am currently expanding my expertise in backend development using Firebase, Stripe, and third-party APIs. My goal is to continually push the boundaries of web design and development, with a focus on crafting seamless, high-performance user experiences.</p>
            <p>When I’m not coding, I enjoy honing my design skills in Figma and tackling new coding challenges to further enhance my problem-solving abilities. I am driven by a passion for learning and a commitment to delivering excellent work.</p>
        </div>
        <div className="skills flex-center">
            <div className="skill-card">
                <p>HTML</p>
                <p>HTML</p>
                <p>HTML</p>
            </div>
            <div className="skill-card">
            <p>HTML</p>
            <p>HTML</p>
            <p>HTML</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
