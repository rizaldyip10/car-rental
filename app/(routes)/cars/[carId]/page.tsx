import axios from "axios";
import Specification from "./_components/specification";
import OtherCarsList from "./_components/other-cars-section";
import { CarsType } from "@/constants/type/cars-type";


const CarDetailPage = async (
    { params }: { params: { carId: string } }
) => {
    const { data } = await axios.get(`/api/cars/${params.carId}`);
    const car = data.car as CarsType;
    return (
        <div className="w-full flex flex-col gap-14">
            <Specification car={car} />
            <OtherCarsList />
        </div>
    )
};

export default CarDetailPage;