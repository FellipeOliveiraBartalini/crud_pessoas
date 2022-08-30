import { useSetRecoilState } from "recoil"
import PessoaService from "services/Pessoa.service";
import { listaPessoas } from "state/atom"
import IPessoa from "types/IPessoa";

export const useSetListaPessoas = () => {
    const pessoaService = new PessoaService;
    const setListaPessoas = useSetRecoilState<IPessoa[]>(listaPessoas);

    return () => {
        pessoaService.getAllPessoas()
            .then(response => {
                return setListaPessoas(response.data);
            });
    }
}
