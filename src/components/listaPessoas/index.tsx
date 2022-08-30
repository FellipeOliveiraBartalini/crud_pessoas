import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './ListaPessoas.module.scss';
import {ReactComponent as LoadingSVG} from 'assets/loading.svg';
import { useListaPessoas } from 'state/hooks/useListaPessoas';
import { useSetListaPessoas } from 'state/hooks/useSetListaPessoas';

export default function ListaPessoas() {
    const listaPessoas = useListaPessoas();
    const listaSetPessoas = useSetListaPessoas();

    console.log('hi');
    
    let pessoas: any[] = [];
    
    useEffect(() => {
        listaSetPessoas();
        console.log('listaPessoas > ', listaPessoas);
        
    }, []);
    
    

    return (
        <table className={style.table}>
            <thead className={style.table__head}>
                <tr className={style.table__row}>
                    <th className={style.table__cell}>Nome</th>
                    <th className={style.table__cell}>E-mail</th>
                    <th className={style.table__cell}>Telefone</th>
                    <th className={style.table__cell}>CPF</th>
                    <th className={style.table__cell}>Editar</th>
                    <th className={style.table__cell}>Excluir</th>
                </tr>
            </thead>
            <tbody className={style.table__body}>
                {
                    (pessoas.length > 0) ? (
                        pessoas.map((pessoa, index) => (
                            <tr key={index} className={style.table__row}>
                                <td className={style.table__cell}>
                                    {pessoa.nome}
                                </td>

                                <td className={style.table__cell}>
                                    {pessoa.email}
                                </td>

                                <td className={style.table__cell}>
                                    {pessoa.telefone}
                                </td>

                                <td className={style.table__cell}>
                                    {pessoa.cpf}
                                </td>

                                <td className={style.table__cell}>
                                    <Link to={`/pessoas/${pessoa.id}`} className={style.table__link}>[ editar ]</Link>
                                </td>

                                <td className={style.table__cell}>
                                    <button className={style.table__link}>[Excluir]</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className={style.table__row}>
                            <td colSpan={6} className={style.table__loading}>
                                <LoadingSVG />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}
