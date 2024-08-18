import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        <Navbar />
        <div className='w-full 2xl:w-[1440px] px-16'>
            { children }
        </div>
        <Footer />
    </div>
  )
}

export default layout