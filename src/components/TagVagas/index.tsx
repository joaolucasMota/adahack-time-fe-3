import * as S from "./styled"

import { BriefcaseBusiness } from "lucide-react"

interface ITagVagasProps {
    Vagas: number
}

export const TagVagas = ( { Vagas}:ITagVagasProps ) => {
    return (
        <S.VagasContainer>
            <BriefcaseBusiness size={20} />
            <p>{Vagas.toString()} Vaga(s)</p>
        </S.VagasContainer>
    )
}