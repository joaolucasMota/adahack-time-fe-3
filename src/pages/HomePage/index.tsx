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

    // const [filter, setFilter] = useState('');

    const [CompanyData, setCompanyData] = useState<EmpresaProps[]>([]);

    const filteredSearch = (search != '')
    ? CompanyData.filter(empresa => empresa.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : CompanyData;

    // function handleFilter(selectedValue: ChangeEvent<HTMLSelectElement>) {
    //     const filter = selectedValue.target.value;
    //     console.log(filter);
    //     setFilter(filter);
    // }

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;
        setSearch(query);
    }

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
        <S.PageContainer>
            <Header />
            <SectionHeader 
                page="home"
                mainText="Empresas"
                subText="Que Apoiam a Inclusão e Diversidade"
            />
            
            <S.Container>
                <S.SearchBarDiv>
                    {/* // Rascunho da ideia  */}
                    {/* <select name="" id="" defaultValue="" onChange={handleFilter} title="Selecione uma avaliação" required>
                        <option value="">Placeholder</option>
                        <option value="positiva">positiva</option>
                        <option value="regular">regular</option>
                    </select> */}
                    <input type="text" name="" id="" placeholder="Placeholder" onChange={handleSearch} />
                </S.SearchBarDiv>
                <S.Grid>
                    {/* {filteredSearch.filter(avaliacao => avaliacao.mediaAvaliacao.toLocaleUpperCase().includes(filter.toLocaleLowerCase())).map(empresa => {
                        return <CompanyCard empresa={empresa} key={empresa.id} />})} */}

                    {filteredSearch.map(empresa => <CompanyCard key={empresa.id} empresa={empresa} />)}
                </S.Grid>
            </S.Container>

            <Footer />
        </S.PageContainer>
    )
}