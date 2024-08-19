import React from 'react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="nav">
    <nav className='navbar'>
      <NavLink to='/' className='link1'>
      <p className='text'>Elph</p>
      <p className='textt'>Bank</p>
      </NavLink>
      <div className="links">
      <NavLink to='/login' className='one'>
          <p>Sign In</p>
        </NavLink>
        <NavLink to='/create' className='two'>
            <p>Create Account</p>
        </NavLink>
        <NavLink to='About' className='three'>
          <p>About</p>
        </NavLink>
      </div>
        </nav>
    </div>

    </>
  )
}

export default Navbar
