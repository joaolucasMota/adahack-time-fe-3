import { Button } from "../../components/Button"
import * as S from "./styled"

export const ErrorPage = () => {
    return (
        <S.FlexContainer>
            <h1><span>Erro 404:</span> Página não Encontrada</h1>
            <Button to="/home" text="Voltar para o Início" />
        </S.FlexContainer>
    )
}