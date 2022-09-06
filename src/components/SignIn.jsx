import { useState } from "react";

export default function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSignIn = async (e) => {

        e.preventDefault();

        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <form onSubmit={handleSignIn}>

                <input 
                    type="text" 
                    value={email}
                    placeholder="Enter your email address"
                    onChange={ (e) => setEmail(e.target.value)}    
                />

                <input 
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={ (e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

            </form>
        </div>
    );

}