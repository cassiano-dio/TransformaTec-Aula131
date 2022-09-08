import React from "react";

const Phone = ({ddd, ddi, pnumber}) => {

    return (
        <div>
            <p>DDD: {ddd}</p>
            <p>DDI: {ddi}</p>
            <p>Numero: {pnumber}</p>
        </div>
    )
}

export default Phone;