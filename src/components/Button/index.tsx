import * as S from "./styled"

interface IButton {
    text: string,
    to: string
}

export const Button = ( { text, to }:IButton ) => {
    return (
        <S.ButtonContainer to={to}>
            {text}
        </S.ButtonContainer>
    )
}