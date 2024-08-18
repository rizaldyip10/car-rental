import CarList from '@/components/car-list'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const OtherCarsList = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
        <div className='w-full flex items-end justify-between'>
            <h1 className='text-black text-5xl max-w-[580px] font-bold'>Other cars</h1>
            <Link href="/" className='flex items-center gap-2 font-bold'>
                View All
                <MoveRight />
            </Link>
        </div>
        <CarList />
    </div>
  )
}

export default OtherCarsList