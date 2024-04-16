import * as S from "./styled"

import { Header } from "../../components/Header"
import { SectionHeader } from "../../components/SectionHeader"
import { Footer } from "../../components/Footer"

export const CompanyPage = () => {
    return (
        <S.PageContainer>
            <Header />
            <SectionHeader 
                page="company"
                mainText="...Aqui vai o nome da empresa"
                subText="...Aqui vai o setor da empresa"
            />

            {/* Conteudo */}

            <Footer />
        </S.PageContainer>
    )
}