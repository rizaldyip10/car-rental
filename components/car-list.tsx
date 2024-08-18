"use client"

import CarCard from '@/components/car-card';
import { CarsType } from '@/constants/type/cars-type';
import { useCarList } from '@/lib/hooks/useCarList';
import { FC } from 'react';

const CarList = () => {
    const { carList, isLoading, error } = useCarList();

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

export default CarList;