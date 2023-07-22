import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const LogIn = () => {
    const signintext_css = "text-6xl mb-6 text-gray-800"
    const signuptext_css = "text-1xl mb-2 text-gray-800"
    const submitbutton_css = "mt-4 mb-8 w-full border-2 border-Fuchsia-500 bg-black text-white py-2 hover:bg-gray-700 transition duration-300 focus:border-transparent"

    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
            console.log("[Succeeded] Sign in");
        } catch (error) {
            setError("ログインに失敗しました。正しいメールアドレスとパスワードを入力してください。");
            console.log(error);
        }
    }

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
                    <h2 className={signintext_css}>Sign In</h2>
                    <form onSubmit={handleSubmit} style={{ marginTop: 1, marginLeft: 'auto', marginRight: 'auto', maxWidth: 600 }} noValidate>
                        <input
                            type="email"
                            placeholder="Email Address"
                            autoComplete="email"
                            value={signInEmail}
                            onChange={(event) => setSignInEmail(event.target.value)}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={signInPassword}
                            onChange={(event) => setSignInPassword(event.target.value)}
                            required
                        />
                        <button type="submit" className={submitbutton_css}>Log In</button>
                    </form>
                    {error && (
                        <div style={{ marginTop: 2}}>
                            {error}
                        </div>
                    )}
                    <h2 className={signuptext_css}>
                        新規ユーザ登録は<Link to="/signup">こちら</Link>
                    </h2>
                </div>
            )}
        </div>
    );
};

export default LogIn;