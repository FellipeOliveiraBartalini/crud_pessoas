import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PessoaService from 'services/Pessoa.service';
import IPessoa from 'types/IPessoa';
import style from './FormPessoas.module.scss';
import { ReactComponent as LoadingSVG } from 'assets/loading.svg';
import IError from 'types/IError';

export default function FormPessoas() {
    const params = useParams();

    const navigate = useNavigate();

    const pessoaService = new PessoaService();
    const [pessoa, setPessoa] = useState<IPessoa>();
    const [error, setError] = useState<IError | null>();

    useEffect(() => {
        if (params.id) {
            pessoaService.getPessoaById(Number(params.id))
                .then(response => {
                    setPessoa(response.data)

                })
                .catch(err => {
                    console.log('err > ', err);
                    setError(err.response.data);
                    navigate('/404');
                })
        }
    }, []);

    return (
        (pessoa !== undefined) ? (
            <form method='post' className={style.formPessoas}>
                <label htmlFor="pessoaNome" className={style.formPessoas__label}>
                    Nome:
                </label>
                <input type="text" className={style.formPessoas__input} id="pessoaNome" value={pessoa?.nome} onChange={() => { }} required />
                <label htmlFor="pessoaEmail" className={style.formPessoas__label}>
                    E-mail:
                </label>
                <input type="email" className={style.formPessoas__input} id="pessoaEmail" value={pessoa?.email} onChange={() => { }} required />
                <label htmlFor="pessoaTelefone" className={style.formPessoas__label}>
                    Telefone:
                </label>
                <input type="tel" className={style.formPessoas__input} id="pessoaTelefone" value={pessoa?.telefone} onChange={() => { }} required />

                <label htmlFor="pessoaCPF" className={style.formPessoas__label}>
                    CPF:
                </label>
                <input type="text" className={style.formPessoas__input} id="pessoaCPF" value={pessoa?.cpf} onChange={() => { }} required />

                <button type="submit" className={style.formPessoas__submit}>Salvar</button>
            </form>
        ) : (
            <LoadingSVG width='100%' />
        )
    );
}
