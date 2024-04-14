import * as S from "./styled";

import { ALargeSmall, Contrast, PersonStanding } from "lucide-react"


export const Footer = ( ) =>{
    return(
            <S.FooterContainer>
                <S.CompanyName><p>Corp Solutions™ - © 2024 </p></S.CompanyName>
                <S.Nav>
                        <div>
                            <PersonStanding />
                            <span>Opções de Acessibilidade</span>
                        </div>
                    <S.Ul>
                        <li onClick={() => { /*futura função de acessibilidade*/ }}>
                            <ALargeSmall />
                            <span>Alternar tamanho da fonte</span>
                        </li>
                        <li onClick={() => { /*futura função de acessibilidade*/ }}>
                            <Contrast />
                            <span>Alternar contraste</span>
                        </li>
                    </S.Ul>
                </S.Nav>
            </S.FooterContainer>
        )
}