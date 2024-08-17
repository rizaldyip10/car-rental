import { NavRoutesType } from '@/constants/type/nav-routes'
import React from 'react'
import NavbarItems from './navbar-items'

const routes: NavRoutesType[] = [
    { label: "Home", href: "/" },
    { label: "Vehicles", href: "/vehicles" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" }
]

const NavbarRoutes = () => {
  return (
    <div className='flex items-center gap-2'>
        {
            routes.map((route, i) => (
                <NavbarItems key={i} label={route.label} href={route.href} />
            ))
        }
    </div>
  )
}

export default NavbarRoutes