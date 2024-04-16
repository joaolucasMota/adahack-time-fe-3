import { ChangeEvent, useEffect, useState } from "react";
import { EmpresaProps } from "../../@types/types";
import { BASE_URL } from "../../util/api";
import * as S from "./styled";
import axios from "axios";

import { SectionHeader } from "../../components/SectionHeader";
import { CompanyCard } from "../../components/CompanyCard";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const HomePage = () => {

    const [search, setSearch] = useState('');
    const [selectedAvaliation, setSelectedAvaliation] = useState('Todas as empresas');
    const [companyData, setCompanyData] = useState<EmpresaProps[]>([]);


    const handleFilterValue = (selectedValue: ChangeEvent<HTMLSelectElement>) => {
        setSelectedAvaliation(selectedValue.target.value);
    };
    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;
        setSearch(query);
    }
    const filteredSearch = companyData.filter(empresa =>
        empresa.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ).filter(empresa =>
        selectedAvaliation === "Todas as empresas" || empresa.mediaAvaliacao === selectedAvaliation
    );


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(BASE_URL);
                setCompanyData(response.data);
            } catch (error) {
                console.error("Erro na requisição:", error);
            }
        }
        fetchData();
    },[]);

    return (
        <S.PageContainer>
            <Header />
            <SectionHeader
                page="home"
                mainText="Empresas"
                subText="Que Apoiam a Inclusão e Diversidade"
            />
            <S.Container>
                <S.SearchBarDiv>
                    <select name="" id="" defaultValue="" onChange={handleFilterValue} title="Selecione uma avaliação" required>
                        <option value="Todas as empresas">Todas as empresas</option>
                        <option value="positiva">Positiva</option>
                        <option value="regular">Regular</option>
                        <option value="neutra">Neutra</option>
                        <option value="negativa">Negativa</option>
                    </select>
                    <input type="text" name="" id="" placeholder="Placeholder" onChange={handleSearch} />
                </S.SearchBarDiv>
                <S.Grid>
                {filteredSearch.length > 0 && (
                        filteredSearch.map(empresa => (
                            <CompanyCard key={empresa.id} empresa={empresa} />
                        ))
                )}
                {filteredSearch.length === 0 && <p>Nenhuma empresa encontrada.</p>}
                </S.Grid>
            </S.Container>

            <Footer />
        </S.PageContainer>
    )
}