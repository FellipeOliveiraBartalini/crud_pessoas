import React from "react";

export default interface Pessoa {
    id: number,
    nome: string,
    email: string,
    telefone: number,
    cpf: number,
    update: boolean
}
