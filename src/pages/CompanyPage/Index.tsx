import { EmpresaProps } from "../../@types/types"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../util/api"
import * as S from "./styled"
import axios from "axios"

import { SectionHeader } from "../../components/SectionHeader"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useParams } from "react-router-dom"

import { NewFeedbackButton } from "../../components/NewFeedbackButton"
import { TagComponent } from "../../components/TagComponent"
import { CardFeedBack } from "../../components/CardFeedback"
import { TagFeedback } from "../../components/TagFeedback"
import { CardVagas } from "../../components/CardVagas"

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

            <S.Main>
                <S.CompanyInfoContainer>
                    <h2>Sobre a Empresa:</h2>
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

                <S.DivSection>
                    <h2>Feedback dos usuários:</h2>
                    <NewFeedbackButton />
                </S.DivSection>

                <S.GridFeedback>
                    {CompanyData?.feedbacks.slice(0,6).map(feedback => <CardFeedBack key={feedback.id} feedback={feedback} />)}
                </S.GridFeedback>

                <S.DivSection>
                    <h2>Vagas disponiveis:</h2>
                </S.DivSection>

                <S.GridVagas>
                    {CompanyData?.vagas.map(vaga => <CardVagas key={vaga.id} vaga={vaga} />)}
                </S.GridVagas>
            </S.Main>

            <Footer />
        </S.PageContainer>
    )
}