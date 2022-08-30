import { useRecoilValue } from "recoil"
import { listaPessoas } from "state/atom"

export const useListaPessoas = () => {
    return useRecoilValue(listaPessoas);
}
