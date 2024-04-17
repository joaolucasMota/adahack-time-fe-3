import { EmpresaProps } from "../../@types/types";
import { ChangeEvent, useState } from "react";
import { BASE_URL } from "../../util/api";
import * as S from "./styled";
import axios from "axios";

import { SectionHeader } from "../../components/SectionHeader";
import { CompanyCard } from "../../components/CompanyCard";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {useQuery} from '@tanstack/react-query'

export const HomePage = () => {

    const {data} = useQuery({ 
        queryKey: [''], 
        queryFn: async () => await axios.get(BASE_URL),
        select(data) {
            return data.data
        }
    })

    const [search, setSearch] = useState<string>('');

    const filteredSearch = (search != "") ? data.filter((empresa: { nome: string; }) => empresa.nome.toLowerCase().includes(search.toLowerCase())) : data


    // function handleFilter(selectedValue: ChangeEvent<HTMLSelectElement>) {
    //     const filter = selectedValue.target.value;
    //     console.log(filter);
    //     setFilter(filter);
    // }

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;
        setSearch(query);
    }

    return (
        <S.PageContainer>
            <Header />
            <SectionHeader 
                page="home"
                mainText="Empresas"
                subText="Que Apoiam a Inclusão e Diversidade"
            />
            {
                data ? 
            <S.Container>
                <S.SearchBarDiv>
                    {/* // Rascunho da ideia  */}
                    <select name="" id="" defaultValue=""  title="Selecione uma avaliação" required>
                        <option value="">Placeholder</option>
                        <option value="positiva">positiva</option>
                        <option value="negativa">negativa</option>
                        <option value="regular">regular</option>
                        <option value="neutra">neutra</option>
                    </select>
                    <input type="text" name="" id="" placeholder="Placeholder" onChange={handleSearch} />
                </S.SearchBarDiv>
                <S.Grid>
                    {data ? filteredSearch.map((empresa:EmpresaProps) => <CompanyCard key={empresa.id} empresa={empresa} />): <Loading/>}
                </S.Grid>
            </S.Container>
                : <Loading/>
            }

            <Footer />
        </S.PageContainer>
    )
}