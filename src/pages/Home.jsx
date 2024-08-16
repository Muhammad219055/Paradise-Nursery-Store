import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CartIcon from '../components/CartIcon'
const Home = () => {
  return (
    <div
    className='Home'
    >
      <NavBar/>
      <Hero/>
      <Footer />
      <CartIcon />
    </div>
  )
}

export default Home
