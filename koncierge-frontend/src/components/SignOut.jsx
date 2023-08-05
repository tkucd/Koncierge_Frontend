import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

import SignOutLogo from "../assets/IMG_SignOutLogo.png";

const SignOut = () => {
    const signout_css = "w-14 h-12 cursor-pointer hover:opacity-60"

    const navigate = useNavigate();
    
    const handleSignOut = async() => {
        try {
            await signOut(auth);
            console.log("[Successed] SignOut");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <img
            src={SignOutLogo}
            alt="Click to sign out"
            className={signout_css}
            onClick={handleSignOut}
        />
    );
};

export default SignOut;