import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"


const AuthBtn = () => {
    return (
        <>
            <SignedOut>
                <div className="flex items-center gap-2">
                    <Button variant="ghost">
                        <SignInButton />
                    </Button>
                    <Button>
                        <SignUpButton />
                    </Button>
                </div>
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    )
}

export default AuthBtn