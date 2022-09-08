import React, { useState, useEffect } from "react";
import Contact from "./Contact";

const ContactList = () => {

    const [contactList, setContactList] = useState([]);
    const [userId, setUserId] = useState(1);

    const url = 'http://localhost:8080/api/users/' + userId + '/contacts'


    useEffect(() =>{
        fetch(url)
        .then(
            (result) => result.json()
        ).then(
            (data) => setContactList(data)
        ).catch(
            (err) => console.log(`Error: ${err}`)
        )

    },[userId])

    console.log(contactList)

    return(
        <div>
            <h3>Listagem de contatos por usuário</h3>
            <input
                type="number"
                value={userId}
                placeholder={"Id do usuário"}
                onChange={(e) => setUserId(e.target.value)}
            />
            {
                contactList.map(
                    (contact) => {
                        return (
                            <Contact
                                id={contact.id}
                                name={contact.name}
                            />
                        )
                    }
                )
            }
        </div>
    )

}

export default ContactList;