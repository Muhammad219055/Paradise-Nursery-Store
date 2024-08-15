import React from 'react'
import Logo from './logo'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/products')
    }
  return (
    <div
    className='hero'
    >
      <Logo />
      <h1>
      Bringing Nature to Your Doorstep
      </h1>
      <h2>
      From seedlings to mature plants, we have it all.
      </h2>
      <button
      onClick={handleClick}
      >
        Shop Now
      </button>
    </div>
  )
}

export default Hero
