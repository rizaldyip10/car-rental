"use client"

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import logo from "@/public/car-rental-logo.png"
import Image from 'next/image'
import SignupForm from './signup-form'
import Link from 'next/link'

const SignupCard = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="w-96  max-sm:w-80 max-sm:px-5 flex flex-col p-8 gap-[72px] border border-gray-300 bg-white rounded-lg"
                initial={{ opacity: 0, y: "-25px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="w-full flex justify-center gap-2 items-center">
                    <Image alt="logo" src={logo} width={45} height={30} className="object-cover" />
                    <h1>Car Rental</h1>
                </div>
                <SignupForm />
                <p>Already have an account? <Link href="/sign-in" className='font-semibold'>Sign in here</Link></p>
            </motion.div>
        </AnimatePresence>
    )
}

export default SignupCard