"use client"

import CarCard from '@/components/car-card';
import { Button } from '@/components/ui/button';
import { CarsType } from '@/constants/type/cars-type';
import { useCarList } from '@/lib/hooks/useCarList';

const CarListPagination = () => {
    const { carList, isLoading, error } = useCarList(999999);

    const list = carList as CarsType[];

    return (
        <div className='w-full grid grid-cols-3 gap-6'>
            {
                isLoading &&
                    <h1>Loading...</h1>
            }
            {
                error &&
                    <h1>Error fetching car list</h1>
            }
            {
                list?.map((car, i) => (
                    <CarCard key={i} carInfo={car} />
                ))
            }
        </div>
    )
};

export default CarListPagination;