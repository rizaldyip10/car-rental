import { UserSessionType } from "@/constants/type/user-type";
import { addCars, getAllCars } from "@/lib/actions/cars.action";
import { findById } from "@/lib/actions/user.action";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { brand, model, year, price, gearBox, fuel, doors, airCon, seats, distance } = await req.json();
        const cookieStore = cookies();
        const token = cookieStore.get("uid");

        if (!token || !token.value) {
            return new NextResponse("You have to login first to rent your car", { status: 401 });
        }

        try {
            const decodedToken = verify(token.value, process.env.JWT_SECRET_KEY!) as UserSessionType;
            
            const user = await findById(decodedToken.id);

            if (!user) {
                return new NextResponse("User not found", { status: 404 });
            }

            const newCar = await addCars({
                brand, model, year, price, owner: user._id, gearBox, fuel, doors, airCon, seats, distance
            });

            return NextResponse.json({ message: "Car added to rent list", car: newCar }, { status: 201 });
        } catch (jwtError) {
            console.error("JWT verification failed:", jwtError);
            return new NextResponse("Invalid or expired token", { status: 401 });
        }
        
    } catch (error) {
        console.error("Server error:", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
};

export const GET = async (req: Request) => {
    try {
        const { searchParams } = new URL(req.url);
        const limit = searchParams.get('limit') || '6';
        const page = searchParams.get('page') || '1';

        const result = await getAllCars({ limit: parseInt(limit), page: parseInt(page) });

        return NextResponse.json({
            message: "Car list fetched",
            ...result
        }, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}