"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SignupBtn = () => {
    const router= useRouter();

    return (
        <Button
            onClick={() => router.push("/sign-up")}
            className="bg-[#5937E0]"
        >
            Sign up
        </Button>
    )
};

export default SignupBtn;