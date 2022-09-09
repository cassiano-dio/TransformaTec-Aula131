import { useState } from "react";
import AddButton from "./AddButton";

export default function SignIn(){

    const formStyle = {
        display: 'flex',
        flexDirection: 'column'
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSignIn = async (e) => {

        e.preventDefault();

        console.log(email);
        console.log(password);
    }

    return (
        <div>

            <h3>Login</h3>
            <form onSubmit={handleSignIn} style={formStyle}>

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

                <AddButton type="submit">Login</AddButton>

            </form>
        </div>
    );

}