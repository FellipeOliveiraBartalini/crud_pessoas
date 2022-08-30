import { useRecoilValue } from "recoil"
import { pessoa } from "state/atom"

export const usePessoa = () => {
    return useRecoilValue(pessoa);
}
