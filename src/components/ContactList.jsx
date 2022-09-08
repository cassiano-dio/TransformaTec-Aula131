import React, { useState, useEffect } from "react";

const ContactList = () => {

    const [contactList, setContactList] = useState([]);
    const [contactId, setContactId] = useState('');

    const url = "http://localhost:8080/api/contacts/1/phones"

    useEffect(() =>{
        fetch(url)
        .then(
            (result) => result.json()
        ).then(
            (data) => console.log(data[0].contact.user)
        ).catch(
            (err) => console.log(`Error: ${err}`)
        )

    },[])

    return(
        <div>

        </div>
    )

}

export default ContactList;