import User from "@/lib/models/user.model";
import { sign } from "jsonwebtoken";
import { compareSync } from "bcrypt-ts";
import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import { cookies } from "next/headers";

export const POST = async (req: Request) => {
    try {
        await connect();
        const { email, password } = await req.json();

        const isUserExist = await User.findOne({ email });
        if (!isUserExist) return new NextResponse("User not found", { status: 404 });

        const comparePassword = compareSync(password, isUserExist.password);
        if (!comparePassword) return new NextResponse("Password did not match", { status: 400 });

        const payload = { id: isUserExist._id, email: isUserExist.email, photo: isUserExist.photo, name: isUserExist.firstName };
        const token = sign(payload, process.env.JWT_SECRET_KEY!, { expiresIn: "6h" });

        const useCookie = cookies();
        useCookie.set("uid", token, {
            httpOnly: true,
            secure: false,
            maxAge: 21600,
            path: "/"
        });

        return NextResponse.json({ message: "Login success", token }, { status: 200 })

    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}