import { atom } from "recoil";
import IPessoa from "types/IPessoa";

export const  pessoa = atom<IPessoa | []>({
    key: 'pessoa',
    default: []
});

export const  listaPessoas = atom<IPessoa[] | []>({
    key: 'listaPessoas',
    default: []
});
