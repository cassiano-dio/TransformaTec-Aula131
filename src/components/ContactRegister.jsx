import { useState } from "react";

export default function ContactRegister(){

    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [groupId, setGroupId] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:8080/api/users/' + userId + '/contacts?gId=' + groupId,{
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify({
                    name: name
                }),
            });

            console.log(res)

            //let resJson = await res.json();

            //console.log(resJson)

            if (res.status === 200 || res.status === 201) {
                setName("");
                setMessage("Contato criado com sucesso");
            } else {
                setMessage("Falha ao executar operação");
            }
        } catch (error) {
            setMessage("Falha ao executar operação");
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    value={name}
                    placeholder={"Nome do contato"}
                    onChange={(e) => setName(e.target.value)}   
                />

                <input 
                    type="number" 
                    value={groupId}
                    placeholder={"Id do grupo"}
                    onChange={(e) => setGroupId(e.target.value)}
                />

                <input 
                    type="number" 
                    value={userId}
                    placeholder={"Id do usuário"}
                    onChange={(e) => setUserId(e.target.value)}
                />

                <button type="submit">Cadastrar</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>

            </form>
        </div>
    )

}