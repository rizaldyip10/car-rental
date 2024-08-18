import { UserInputType } from "@/constants/type/user-type";
import { createUser } from "@/lib/actions/user.action";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    try {
        const { firstName, lastName, email, password } = await req.json() as unknown as UserInputType;

        if (!firstName || !lastName || !email || !password) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);

        const newUser = await createUser({
            firstName, lastName, email, password: hashedPassword
        })

        return NextResponse.json({ message: "User registered", user: newUser }, { status: 201 })
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}