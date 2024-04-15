import { TagFeedback } from "../TagFeedback"
import { TagComponent } from "../TagComponent"
import * as S from "./styled"

interface IEmpresaProps {
    empresa: EmpresaProps
}

export const CompanyCard = ( { empresa }:IEmpresaProps ) => {
    return (
        <S.Container>
            <S.Title>{empresa.nome}</S.Title>
            <S.Sector>{empresa.setor}</S.Sector>
            <TagFeedback variant={empresa.mediaAvaliacao} />
            <S.CardFooter>
                <TagComponent variant="endereco" text={empresa.local} />
                <TagComponent variant="vagas" text={`${String(empresa.qtdVagas)} vaga(s)`} />
            </S.CardFooter>
        </S.Container>
    )
}