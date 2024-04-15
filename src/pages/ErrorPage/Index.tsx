import { Link } from "react-router-dom"
import * as S from "./styled"

export const ErrorPage = () => {
    return (
        <S.FlexContainer>
            <h1><span>Erro 404:</span> Página não Encontrada</h1>
            <Link to="/">Voltar para o Início</Link>
        </S.FlexContainer>
    )
}