import { useState } from "react";
import AddButton from "./AddButton";

export default function GroupRegister(){

    const formStyle = {
        display: 'flex',
        flexDirection: 'column'
    }

    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {

        e.preventDefault();

        try {
            
            let result = await fetch ('http://localhost:8080/api/user/' + userId + '/groups',{
                method : 'POST',
                headers : {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name
                }),
            })

            if (result.status === 200 || result.status === 201) {
                setName("");
                setUserId("");
                setMessage("Grupo criado com sucesso");
            } else {
                console.log(result)
                setMessage("Falha ao executar operação");
            }

        } catch (error) {
            console.log(error.message);
            setMessage(error.message);
        }
    }

    return (
        <div>

            <h3>Cadastro de grupo</h3>

            <form onSubmit={handleSubmit} style={formStyle}>

                <input 
                    type="text"
                    value = {userId}
                    placeholder = {"Id do usuário"}
                    onChange={(e) => setUserId(e.target.value)}
                />

                <input 
                    type="text"
                    value = {name}
                    placeholder = {"Nome do grupo"}
                    onChange={(e) => setName(e.target.value)}
                />

                <AddButton type="submit">Cadastrar Grupo</AddButton>

                <div className="message">{message ? <p>{message}</p> : null}</div>

            </form>
        </div>
    )

}