import { ButtonHTMLAttributes } from "react"
import * as S from "./styled"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    to: string;
}

export const Button = ( { text, to }:IButton ) => {
    return (
        <S.ButtonContainer to={to} >
            {text}
        </S.ButtonContainer>
    )
}