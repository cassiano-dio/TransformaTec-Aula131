import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Home() {
    return (
        <div>
            <header>

                <Link to="/signup">
                    Cadastro
                </Link>

                <Link to="/signin">
                    Acesso
                </Link>

            </header>

            <main>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </main>

        </div>
    )
}