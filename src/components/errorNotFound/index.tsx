import React from 'react';
import style from './ErrorNotFound.module.scss';
import { useNavigate } from 'react-router-dom';

export const ErrorNotFound = () => {
    const navigate = useNavigate();

    return (
        <section className={style.notFoundSection}>
            <h1 className={style.notFoundSection__titulo}>Error 404 - Page not found</h1>
            <button className={style.notFoundSection__button} onClick={() => navigate('/')}>Voltar para o início</button>
        </section>
    );
}
