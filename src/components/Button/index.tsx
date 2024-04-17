import { ButtonHTMLAttributes } from "react"
import * as S from "./styled"



interface IButton {
    text: string,
    to: string
    onClick?: () => void;
}

export const Button = ( { text, to, onClick }:IButton ) => {
    return (

        <S.ButtonContainer to={to} onClick={onClick} >
            {text}
        </S.ButtonContainer>
    )
}