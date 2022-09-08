import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Home (){
    return (
        <div>
            <header>

                <Link to="/signup">
                    Home
                </Link>
                
                <Link to="/signup">
                    Cadastro
                </Link>

                <Link to="/signin">
                    Acesso
                </Link>

              
            </header>

            <Routes>
                <Route path="/" element={<Home />} exact="/"/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/signin" element={<SignIn />}/>
            </Routes>
        </div>
    )
}