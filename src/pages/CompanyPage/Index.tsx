import { EmpresaProps } from "../../@types/types"
import { useEffect, useState } from "react"
// import { BASE_URL } from "../../util/api"
import * as S from "./styled"
import axios from "axios"

import { SectionHeader } from "../../components/SectionHeader"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../util/api"
import { TagFeedback } from "../../components/TagFeedback"
import { TagComponent } from "../../components/TagComponent"
import { NewFeedbackButton } from "../../components/NewFeedbackButton"

export const CompanyPage = () => {

    const [CompanyData, setCompanyData] = useState<EmpresaProps>();

    const {id} = useParams();

    useEffect(() => {
        async function fetchData(id:string|undefined) {
            try {
                const response = await axios.get(`${BASE_URL}/${id}`);
                setCompanyData(response.data);
            } catch (error) {
                console.log("Erro na requisição:", error);
            }
        } fetchData(id);
    }, [id]);

    return (
        <S.PageContainer>
            <Header />
            <SectionHeader 
                page="company"
                mainText={CompanyData?.nome}
                subText={CompanyData?.setor}
            />

            {/* Conteudo */}

            <S.CompanyInfoContainer>
                <h1>Sobre a Empresa:</h1>
                <pre>{CompanyData?.descricao}</pre>
                <S.CompanyInfoTagsContainer>
                    <TagFeedback variant={CompanyData?.mediaAvaliacao}/>
                    <TagComponent variant="endereco" text={CompanyData?.local} />
                    <TagComponent variant="vagas" text={`${String(CompanyData?.qtdVagas)} vaga(s)`} />
                    {
                        CompanyData?.pcd && <TagComponent variant="PCDs" text="Está empresa possui vagas para PCDs" />
                    }
                </S.CompanyInfoTagsContainer>
            </S.CompanyInfoContainer>

            <NewFeedbackButton />

            

            <Footer />
        </S.PageContainer>
    )
}