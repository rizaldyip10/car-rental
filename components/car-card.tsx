"use client"

import carPlaceholder from "@/assets/images/car-placeholder.png"
import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { CarsType } from "@/constants/type/cars-type"
import { FC } from "react"
import { currencyFormatter } from "@/utils/currencyFormatter"

interface CarCardProps {
    carInfo: CarsType;
}
const CarCard: FC<CarCardProps> = ({ carInfo }) => {
    const router = useRouter();

    return (
        <div className='w-full flex flex-col items-center bg-[#FAFAFA] p-6 gap-5'>
            <Image src={carPlaceholder} alt="car" />
            <div className="w-full flex justify-between">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold">{ carInfo.model }</h1>
                    <p className="text-lg">{ carInfo.brand }</p>
                </div>
                <div className="flex flex-col items-end">
                    <h1 className="text-2xl font-semibold text-[#5937E0]">{ currencyFormatter(carInfo.price) }</h1>
                    <p className="text-sm">per day</p>
                </div>
            </div>
            <Button 
                className="w-full bg-[#5937E0] mt-5"
                onClick={() => router.push(`/cars/${carInfo._id}`)}
            >
                View Details
            </Button>
        </div>
    )
}

export default CarCard