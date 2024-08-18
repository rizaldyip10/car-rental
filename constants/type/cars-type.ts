import { OwnerType } from "./user-type";

export type CarsInputType = {
    brand: string;
    model: string;
    year: number;
    price: number;
    owner: string;
    gearBox: string;
    fuel: string;
    doors: number;
    airCon: boolean;
    seats: number;
    distance: number;
}

export type CarsType = {
    availability: boolean;
    brand: string;
    model: string;
    year: number;
    price: number;
    owner: OwnerType;
    __v: number;
    _id: string;
    specification: {
        gearBox: string;
        fuel: string;
        doors: number;
        airCon: boolean;
        seats: number;
        distance: number;
    }
}