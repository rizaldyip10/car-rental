import SigninBtn from "./siginin-btn"
import SignupBtn from "./signup-btn"


const AuthBtn = () => {
    return (
        <div className="flex items-center gap-2">
            <SigninBtn />
            <SignupBtn />
        </div>
    )
}

export default AuthBtn