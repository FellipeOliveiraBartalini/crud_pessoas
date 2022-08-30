import React from 'react';
import { enviroment } from 'enviroment';
import IPessoa from 'types/IPessoa';

export default class PessoaService {
    getAllPessoas() {
        return enviroment.get<IPessoa[]>(`pessoas/`);
    }
    
    getPessoaById(id: number) {
        return enviroment.get<IPessoa>(`pessoas/${id}`);
    }
    
    createPessoa(pessoa: IPessoa) {
        pessoa.update = false;
        return enviroment.post<IPessoa>(`pessoas/`, pessoa);
    }
    
    updatePessoa(pessoa: IPessoa) {
        pessoa.update = true;
        return enviroment.post<IPessoa>(`pessoas/`, pessoa);
    }
    
    deletePessoa(id: number) {
        return enviroment.delete<IPessoa>(`pessoas/${id}`);
    }
}
