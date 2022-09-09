import React from "react";

const Contact = ({id, name}) => {

    return (
        <div className="card" key={id}>
            <p>ID: {id}</p>
            <p>Nome: {name}</p>
        </div>
    )
}

export default Contact;