"use server";

import { CarsInputType } from "@/constants/type/cars-type";
import { connect } from "../db";
import Cars from "../models/cars.model";
import User from "../models/user.model";

export async function addCars({ 
    brand, 
    model, 
    year, 
    price, 
    owner,
    gearBox,
    fuel,
    doors,
    airCon,
    seats,
    distance 
}: CarsInputType) {
    try {
        await connect();

        if (price <= 0) {
            throw new Error('Price must be positive');
        };

        const newCar = await Cars.create({
            brand, model, year, price, owner, specification: {
                gearBox, fuel, doors, airCon, seats, distance
            }
        });

        await User.findOneAndUpdate({ _id: owner }, { $push: { "cars": newCar._id } });

        console.log("New car added");
        
        return JSON.parse(JSON.stringify(newCar.toObject()));
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export async function getAllCars(query: any) {
    try {
        await connect();

        const limit = parseInt(query.limit) || 6;

        const carList = await Cars.find({ availability: true })
            .populate("owner", "photo firstName lastName phone")
            .skip((query.page - 1) * query.limit)
            .limit(limit + 1)
            .lean();

        const totalDocuments = await Cars.countDocuments({ availability: true });

        const hasNextPage = carList.length > limit;
        const cars = hasNextPage ? carList.slice(0, -1) : carList;

        return {
            cars,
            hasNextPage,
            totalDocuments,
            totalPages: Math.ceil(totalDocuments / limit),
            page: query.page
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export async function getCarDetail (carId: string) {
    try {
        connect();
        const car = await Cars.findOne({_id: carId});
        return car;
    } catch (error) {
        console.log(error);
        throw error;
    }
}