import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/header';
import Home from 'pages/home';
import Container from 'components/container';
import ListaPessoas from 'components/listaPessoas';
import FormPessoas from 'components/formPessoas';
import { ErrorNotFound } from 'components/errorNotFound';
import { RecoilRoot } from 'recoil';

export default function AppRouter() {
    return (
        <RecoilRoot>
        <Router>
            <Header />

            <Routes>
                <Route path='/' element={<Container />}>
                    <Route index element={<Home />} />
                    <Route path='pessoas'>
                        <Route index element={<ListaPessoas />} />
                        <Route path=':id' element={<FormPessoas />} />
                    </Route>
                    <Route path='adicionarPessoa' element={<FormPessoas />} />
                    <Route path='*' element={<ErrorNotFound />} />
                </Route>
            </Routes>
        </Router></RecoilRoot>
    );
}
