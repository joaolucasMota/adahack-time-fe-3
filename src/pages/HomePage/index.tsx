import { EmpresaProps } from "../../@types/types";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { BASE_URL } from "../../util/api";
import * as S from "./styled";
import axios from "axios";

import { SectionHeader } from "../../components/SectionHeader";
import { CompanyCard } from "../../components/CompanyCard";
import { InputComponent } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['companies'],
        queryFn: async () => {
            const response = await axios.get(BASE_URL);
            return response.data;
        }
    });

    const [search, setSearch] = useState<string>('');

    const [selectedAvaliation, setSelectedAvaliation] = useState('Todas as empresas');

    const handleFilterValue = (selectedValue: ChangeEvent<HTMLSelectElement>) => {
        setSelectedAvaliation(selectedValue.target.value);
    };

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;
        setSearch(query.toLowerCase()); 
    }

    const filteredSearch = data ? data.filter((empresa: EmpresaProps) =>
        empresa.nome.toLowerCase().includes(search) &&
        (selectedAvaliation === "Todas as empresas" || empresa.mediaAvaliacao === selectedAvaliation)
    ) : [];

    return (
        <S.PageContainer>
            <Header />
            <SectionHeader page="home" mainText="Empresas" subText="Que Apoiam a Inclusão e Diversidade" />
            <S.Container>
                <S.SearchBarDiv>
                    <S.Select name="" id="" defaultValue="" onChange={handleFilterValue} title="Selecione uma avaliação" required>
                        <option value="Todas as empresas">Todas as empresas</option>
                        <option value="positiva">Positiva</option>
                        <option value="regular">Regular</option>
                        <option value="neutra">Neutra</option>
                        <option value="negativa">Negativa</option>
                    </S.Select>
                    <InputComponent type="text" placeholder="Nome empresa..." onChange={handleSearch} />
                </S.SearchBarDiv>
                <S.Grid>
                    {isLoading && <Loading />}
                    {!isLoading && filteredSearch.length > 0 && filteredSearch.map((empresa: EmpresaProps) =>
                        <CompanyCard key={empresa.id} empresa={empresa} />
                    )}
                    {!isLoading && filteredSearch.length === 0 && <p>Nenhuma empresa encontrada.</p>}
                </S.Grid>
            </S.Container>
            <Footer />
        </S.PageContainer>
    );
};