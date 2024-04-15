import { useEffect, useState } from "react";
import * as S from "./styled"
import axios from "axios";

import { NewFeedbackButton } from "../../components/NewFeedbackButton";
import { SectionHeader } from "../../components/SectionHeader";
import { TagComponent } from "../../components/TagComponent";
import { CompanyCard } from "../../components/CompanyCard"
import { BASE_URL } from "../../util/api";

export const HomePage = () => {

    const [CompanyData, setCompanyData] = useState<EmpresaProps[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(BASE_URL);
                setCompanyData(response.data);
            } catch (error) {
                console.log("Erro na requisição:", error);
            }
        } fetchData();
    }, [CompanyData]);

    return (
        <>
            <SectionHeader 
                variant="homepage"
                mainText="Corp Solutions Corp Solutions Corp ApenasUmTesteDeTextoMuitoLongoParaAQuebraDeLinhaNoMobile"
                subText="Recursos Humanos" 
            />
            <br />
            <S.Container>
                <p>Hello World</p>
            </S.Container>
            <br />
            {CompanyData.map(empresa => <CompanyCard key={empresa.nome} empresa={empresa} />)}
            <br />
            <TagComponent variant="PCDs" textSize="medium" text="Está empresa possui vagas para PCDs" />
            <br />
            <NewFeedbackButton />
            <br />
        </>
    )
}