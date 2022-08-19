import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/header';
import Home from 'pages/home';
import Container from 'components/container';
import ListaPessoas from 'components/listaPessoas';

export default function AppRouter() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path='/' element={<Container />}>
                    <Route index element={<Home />} />
                    <Route path='pessoas' element={<ListaPessoas />} />
                </Route>
            </Routes>
        </Router>
    );
}
