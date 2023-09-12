import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Movies from '../components/Movies/Movies'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Movies/>
      <Footer/>
    </div>
  )
}

export default Home