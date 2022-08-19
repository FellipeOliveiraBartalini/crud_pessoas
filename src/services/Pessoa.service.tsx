import React from 'react';
import { enviroment } from 'enviroment';
import Pessoa from 'types/pessoa';

export default class PessoaService {
    getAllPessoas() {
        return enviroment.get<Pessoa[]>(`pessoas/`);
    }
    
    getPessoaById(id: number) {
        return enviroment.get<Pessoa>(`pessoas/${id}`);
    }
    
    createPessoa(pessoa: Pessoa) {
        pessoa.update = false;
        return enviroment.post<Pessoa>(`pessoas/`, pessoa);
    }
    
    updatePessoa(pessoa: Pessoa) {
        pessoa.update = true;
        return enviroment.post<Pessoa>(`pessoas/`, pessoa);
    }
    
    deletePessoa(id: number) {
        return enviroment.delete<Pessoa>(`pessoas/${id}`);
    }
}
