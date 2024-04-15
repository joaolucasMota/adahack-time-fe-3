import { useEffect, useState } from "react";
import * as S from "./styled"
import axios from "axios";

import { ButtonNewFeedback } from "../../components/ButtonNewFeedback";
import { EmpresaHeader } from "../../components/EmpresaHeader";
import { CardEmpresa } from "../../components/CardEmpresa"
import { TagPCDs } from "../../components/TagPCDs"
import { BASE_URL } from "../../util/api";

export const HomePage = () => {

  const [EmpresasData, setEmpresasData] = useState<EmpresaProps[]>([]); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(BASE_URL);
        setEmpresasData(response.data);
      } catch (error) {
        console.log("Erro na requisição:", error);
      }
    } fetchData();
  }, [EmpresasData]);

  return (
    <>
      <EmpresaHeader nome="Corp Solutions Corp Solutions Corp ApenasUmTesteDeTextoMuitoLongoParaAQuebraDeLinhaNoMobile" setor="Recursos Humanos" />
      <S.Container>
        <p>Hello World</p>
      </S.Container>
      <br />
      {EmpresasData.map(empresa => <CardEmpresa key={empresa.nome} empresa={empresa} />)}
      <br />
      <TagPCDs possuiVagas={true} />
      <br />
      <ButtonNewFeedback />
      <br />
    </>
  )
}

