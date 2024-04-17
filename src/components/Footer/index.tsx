import { useState } from "react";
import { TagComponent } from "../TagComponent";
import * as S from "./styled";

export const Footer = ( ) =>{

    const [contrast, setContrast] = useState(true);

    const HandleClick = () => {
        setContrast(!contrast);
        document.body.classList.toggle('contrast', contrast);
    }

    const [fontSize, setSize] = useState(true);

    const HandleFontSize = () => {
        setSize(!fontSize);
        document.body.classList.toggle('fontSize', fontSize);
    }

    return(
        <S.FooterContainer>
            <S.CompanyName><p>Corp Solutions™ - © 2024 </p></S.CompanyName>
            <S.Nav>
                <S.Bold><TagComponent variant="acessibilidade" text="Opções de Acessibilidade: " /></S.Bold>
                
                <S.FlexDiv>
                    <button onClick={HandleFontSize}>
                        <TagComponent variant="tamanho-fonte" text="Alternar tamanho da fonte" />
                    </button>

                    <button onClick={HandleClick}>
                        <TagComponent variant="contraste" text="Alternar contraste" />
                    </button>
                </S.FlexDiv>
            </S.Nav>
        </S.FooterContainer>
    )
}