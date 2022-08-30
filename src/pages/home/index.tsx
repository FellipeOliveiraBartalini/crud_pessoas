import React from 'react';
import ListaPessoas from 'components/listaPessoas';
import style from './Home.module.scss';

export default function Home() {
    return (
        <section>
            <h2>Lista de Pessoas cadastradas!</h2>
            <ListaPessoas />
        </section>
    );
}
