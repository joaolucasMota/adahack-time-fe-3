import { TagComponent } from "../TagComponent";
import * as S from "./styled";

export const Footer = ( ) =>{
    return(
        <S.FooterContainer>
            <S.CompanyName><p>Corp Solutions™ - © 2024 </p></S.CompanyName>
            <S.Nav>
                <S.Bold><TagComponent variant="acessibilidade" text="Opções de Acessibilidade: " /></S.Bold>
                
                <S.FlexDiv>
                    <button onClick={() => { /*futura função de acessibilidade*/ }}>
                        <TagComponent variant="tamanho-fonte" text="Alternar tamanho da fonte" />
                    </button>

                    <button onClick={() => { /*futura função de acessibilidade*/ }}>
                        <TagComponent variant="contraste" text="Alternar contraste" />
                    </button>
                </S.FlexDiv>
            </S.Nav>
        </S.FooterContainer>
    )
}