"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SigninBtn = () => {
    const router= useRouter();

    return (
        <Button
            onClick={() => router.push("/sign-in")}
            variant="ghost"
        >
            Sign In
        </Button>
    )
};

export default SigninBtn;