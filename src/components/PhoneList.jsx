import React, { useState, useEffect } from "react";
import Phone from "./Phone";

const PhoneList = () => {

    const [phoneList, setPhoneList] = useState([]);
    const [contactId, setContactId] = useState(1);

    const url = 'http://localhost:8080/api/contacts/' + contactId + '/phones'

    useEffect(() => {
        fetch(url)
            .then(
                (result) => result.json()
            ).then(
                (data) => setPhoneList(data)
            ).catch(
                (err) => console.log(`Error: ${err}`)
            )

    }, [contactId])

    console.log(phoneList)

    return (
        <div>

            <h3>Listagem de telefones por contato</h3>
            <input
                type="number"
                value={contactId}
                placeholder={"Id do contato"}
                onChange={(e) => setContactId(e.target.value)}
            />

            {
                phoneList.map(
                    (phone) => {
                        return (
                            <Phone
                                ddd={phone.ddd}
                                ddi={phone.ddi}
                                pnumber={phone.phoneNumber}
                            />
                        )
                    }
                )
            }

        </div>
    )
}

export default PhoneList