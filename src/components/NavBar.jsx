import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './logo'
const NavBar = () => {
  return (
    <nav className='navBar'>
     <div className="navBarContent">
      <NavLink 
      to={'/'}
      className="storeLogo">  
      <Logo />
      </NavLink>
      <div className='pages'>
        <NavLink
          className={({ isActive }) => isActive ? 'activePage' : 'page'}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'activePage' : 'page'}
          to='/products'
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'activePage' : 'page'}
          to='/cart'
        >
          Cart
        </NavLink>
      </div>
     </div>
    </nav>
  )
}

export default NavBar