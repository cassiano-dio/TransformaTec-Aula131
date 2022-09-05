import { useState } from "react";

export default function SignIn(){

    const [username, SetUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async(e) => {
        e.preventDefault();

        try {
            
            let res = await fetch("http://localhost:8080/api/users",{
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                }),
            });

            //mainipulando o resultado da request
            let jsonRes = await res.json();

            if (res.status === 200) {
                setEmail("");
                SetUsername("");
                setPassword("");
                setMessage("Usuário criado com sucesso");
                console.log(jsonRes);
            } else {
                console.log(res);
                setMessage("Falha ao executar operação");
            }

        } catch (error) {
            setMessage("Falha ao executar operação");
            console.log(error);
        }
    };

    return(

        <div>

            <form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    value={username}
                    placeholder={"Nome"}
                    onChange={(e) => SetUsername(e.target.value)}   
                />

                <input 
                    type="email" 
                    value={email}
                    placeholder={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password" 
                    value={password}
                    placeholder={"Senha"}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">SignUp</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>

            </form>

        </div>

    );

}