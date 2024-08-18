import Image from 'next/image'
import carPlaceholder from "@/assets/images/car-placeholder.png"
import { currencyFormatter } from '@/utils/currencyFormatter'
import SpecCard from './spec-card'
import { Button } from '@/components/ui/button'
import { CarsType } from '@/constants/type/cars-type'
import { FC } from 'react'

interface SpecificationProps {
    car: CarsType;
}
const Specification: FC<SpecificationProps> = ({ car }) => {
    const label = Object.keys(car.specification);
    const formattedLabel = label.map(spec => {
        return spec
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/^[a-z]/, match => match.toUpperCase());
    });

    const value = Object.values(car.specification);
    
    return (
        <div className='w-full grid grid-cols-2 py-14 gap-x-6'>
            <div className='w-full flex flex-col gap-5'>
                <div className="flex items-start gap-2">
                    <h1 className='text-4xl font-bold'>{ car.model }</h1>
                    <p>{ car.brand }</p>
                </div>
                <div className="flex items-start gap-1">
                    <h1 className='text-4xl font-semibold text-[#5937E0]'>{currencyFormatter(car.price)}</h1>
                    <p>/ day</p>
                </div>
                <Image src={carPlaceholder} alt='car' width={636} height={303} />
            </div>
            <div className='w-full flex flex-col gap-10'>
                <h1 className='text-2xl font-semibold'>Technical Specification</h1>
                <div className='w-full grid grid-cols-3 gap-6'>
                    {
                        formattedLabel.map((lab, i) => (
                            <SpecCard key={i} label={lab} value={value[i]} />
                        ))
                    }
                </div>
                <div className='flex flex-col gap-5 mt-10'>
                    {
                        car.availability ?
                            <h1 className='text-xl font-semibold text-green-500'>Available for rent</h1> :
                            <h1 className='text-xl font-semibold text-red-500'>Not available for rent</h1>
                    }
                    <Button
                        className='bg-[#5937E0]'
                    >
                        Rent a car
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Specification