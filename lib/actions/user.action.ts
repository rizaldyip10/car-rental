"use server";

import User from "../models/user.model";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
    try {
        await connect();
        const newUser = await User.create(user);
        console.log("New user created");
        
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function findById(id: string) {
    try {
        await connect();
        const user = await User.findOne({ _id: id });

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.log(error);
        throw error;
    }
}