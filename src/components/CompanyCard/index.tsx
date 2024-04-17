import { EmpresaProps } from "../../@types/types"
import { TagComponent } from "../TagComponent"
import { TagFeedback } from "../TagFeedback"
import * as S from "./styled"

interface IEmpresaProps {
    empresa: EmpresaProps
}

export const CompanyCard = ( { empresa }:IEmpresaProps ) => {
    return (
        <S.CardLink to={`Empresa/${empresa.id}`}>
            <S.Container>
                <S.Title>{empresa.nome}</S.Title>
                <S.Sector>{empresa.setor}</S.Sector>
                <TagFeedback variant={empresa.mediaAvaliacao} />
                <S.CardFooter>
                    <TagComponent variant="endereco" text={empresa.local} />
                    <TagComponent variant="vagas" text={`${String(empresa.qtdVagas)} vaga(s)`} />
                </S.CardFooter>
            </S.Container>
        </S.CardLink>
    )
}