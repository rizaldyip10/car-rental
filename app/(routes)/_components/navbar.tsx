import React from 'react'
import Logo from './logo'
import NavbarRoutes from './navbar-routes'
import AuthBtn from './auth-btn'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-center h-20'>
        <div className='w-full 2xl:w-[1440px] flex justify-between items-center px-16'>
            <Logo />
            <NavbarRoutes />
            <AuthBtn />
        </div>
    </div>
  )
}

export default Navbar