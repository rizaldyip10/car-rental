import Image from 'next/image'
import React from 'react'
import carImg from "@/assets/images/car-hero.png"
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <div className='w-full flex h-[660px] bg-[#5937E0] rounded-[40px] p-16 relative'>
            <Image src={carImg} alt='car' className='w-[698px] bottom-0 absolute translate-x-1/2' />
            <div className='w-full flex items-center'>
                <div className='w-1/2 flex flex-col gap-7'>
                    <h1 className='text-white text-6xl font-bold'>Experience the road like never before</h1>
                    <p className='text-white max-w-96 text-base'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                    <Button className='w-40 text-white bg-[#FF9E0C]'>
                        View all cars
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero