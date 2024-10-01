import React from 'react'
import { Navbar, Footer } from '../components';
import{ Hero, About }  from '../container'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default Home
