import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import ContactList from "./ContactList";
import ContactRegister from "./ContactRegister";
import PhoneRegister from "./PhoneRegister";
import PhoneList from "./PhoneList";
import Home from "./Home";

export default function Welcome (){
    return (
        <div>
            <header>

                <Link to="/contact/list">
                    Lista de contatos
                </Link>
                
                <Link to="/contact/register">
                    Registro de contato
                </Link>

                <Link to="/phone/register">
                    Registro de telefone
                </Link>

                <Link to="/phone/list">
                    Lista de telefones
                </Link>
            </header>

            <Routes>
                <Route path="/" element={<Home />} exact="/"/>
                <Route path="/contact/list" element={<ContactList />}/>
                <Route path="/contact/register" element={<ContactRegister />}/>
                <Route path="/phone/list" element={<PhoneList />}/>
                <Route path="/phone/register" element={<PhoneRegister />}/>
            </Routes>
        </div>
    )
}