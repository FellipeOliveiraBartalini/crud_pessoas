import React from 'react';
import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={style.header}>
            <h1>CRUD de Pessoas</h1>
        </header>
    );
}
