import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Header.module.scss';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className={style.header}>
            <button className={style.btnVoltar} onClick={() => navigate(-1)}>{'< Voltar'}</button>
            <h1>CRUD de Pessoas</h1>
            <ul>
                <li><Link to='/adicionarPessoa'>Create Pessoa</Link></li>
            </ul>
        </header>
    );
}
