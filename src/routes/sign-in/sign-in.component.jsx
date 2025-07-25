import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const SignIn = () => {

    const logGoogleUser = async() => {
        try {
            const response = await signInWithGooglePopup();
            console.log("Google sign-in successful:", response);
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    );
}

export default SignIn