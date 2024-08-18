import { getCarDetail } from "@/lib/actions/cars.action";
import { NextResponse } from "next/server";

export const GET = async (
    request: Request, 
    { params }: { params: { carId: string } }
) => {
    try {
        const car = await getCarDetail(params.carId);

        if (!car) return new NextResponse("Car not found", { status: 404 });

        return NextResponse.json({ message: "Car detail fetched", car }, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal server error", { status: 500 });
    }
};
