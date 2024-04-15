import { TagAvaliacao } from "../TagAvaliacao"
import { TagEndereco } from "../TagEndereco"
import { TagVagas } from "../TagVagas"
import * as S from "./styled"

interface IEmpresaProps {
    empresa: EmpresaProps
}

export const CardEmpresa = ( { empresa }:IEmpresaProps ) => {
    return (
        <S.CardContainer>
            <S.Title>{empresa.nome}</S.Title>
            <S.Sector>{empresa.setor}</S.Sector>
            <TagAvaliacao variant={empresa.mediaAvaliacao} />
            <S.CardFooter>
                <TagEndereco Endereco={empresa.local} />
                <TagVagas Vagas={empresa.qtdVagas} />
            </S.CardFooter>
        </S.CardContainer>
    )
}