import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const SignUp = () => {
    const signuptext_css = "text-6xl mb-6 text-leather-beige"
    const signintext_css = "text-1xl mb-2 text-leather-beige"
    const submitbutton_css = "mt-4 mb-8 w-full border-2 border-Fuchsia-500 bg-leather-beige text-retro-bordeaux py-2 hover:bg-gray-700 transition duration-300 focus:border-transparent"

    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
            console.log("[Succeeded] Sign up");
        } catch (error) {
            setError("ユーザ登録に失敗しました。正しいメールアドレスとパスワードを入力してください。");
            console.log(error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
            {user ? (<Navigate to="/selectMode" replace />) : (
                <div>
                    <h2 className={signuptext_css}>Sign Up</h2>
                    <form onSubmit={handleSubmit} style={{ marginTop: 1, marginLeft: 'auto', marginRight: 'auto', maxWidth: 600 }} noValidate>
                        <input
                            type="email"
                            placeholder="Email Address"
                            autoComplete="email"
                            value={signUpEmail}
                            onChange={(event) => setSignUpEmail(event.target.value)}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={signUpPassword}
                            onChange={(event) => setSignUpPassword(event.target.value)}
                            required
                        />
                        <button type="submit" className={submitbutton_css}>Sign Up</button>
                    </form>
                    {error && (
                        <div style={{ marginTop: 2}}>
                            {error}
                        </div>
                    )}
                    <h2 className={signintext_css}>
                        ログインは<Link to="/">こちら</Link>
                    </h2>
                </div>
            )}
        </div>
    );
};

export default SignUp;
