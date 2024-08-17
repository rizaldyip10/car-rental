"use client"

import { Button } from '@/components/ui/button'
import { NavRoutesType } from '@/constants/type/nav-routes'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavbarItems: React.FC<NavRoutesType> = ({ label, href }) => {
    const router = useRouter()
    return (
        <Button onClick={() => router.push(href)} variant="link">
            {label}
        </Button>
    )
}

export default NavbarItems