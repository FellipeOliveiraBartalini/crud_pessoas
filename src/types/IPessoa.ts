import React from "react";

export default interface IPessoa {
    id: number,
    nome: string,
    email: string,
    telefone: number,
    cpf: number,
    update: boolean
}
