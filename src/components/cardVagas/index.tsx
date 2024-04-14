import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import { Accessibility, BriefcaseBusiness} from 'lucide-react';
//import {Ivagas} from '../../interfaces/empresa.interface'

interface Vaga {
  id: number;
  dataPublicacao: string;
  nomeVaga: string;
  salario: string;
  aceitaPCD: boolean;
  quantidadeVagas: string;
  vagas: string[];
}


export const CardVagas = () => {
  
  const [vagas, setVagas] = useState<Vaga[]>([]);

  useEffect(() => {
    axios
      .get<Vaga[]>("http://localhost:3000/empresas") 
      .then((response) => {

        response.data.forEach((ele)=> {
          setVagas(ele.vagas);
          //console.log(ele.vagas)
        })

      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
      <S.ContainerCardVagas>
        {vagas.map((vaga) => (
          <S.CardVagas key={vaga.id}>

              <S.DataPublicacao>
                {vaga.dataPublicacao}
              </S.DataPublicacao>

            <S.NomeVaga>
              <h4>{vaga.nomeVaga}</h4>
              <hr />
            </S.NomeVaga>

              <p>Vaga afirmativa para negros & pardos</p>

            <S.QuantidadeVagas>
              <p><Accessibility /> { vaga.aceitaPCD ? "Aceita PCD" : "Não aceita PCD"}</p>
              <p><BriefcaseBusiness /> { vaga.quantidadeVagas}</p>
            </S.QuantidadeVagas>

            <S.SalarioVaga>
              <p><span>Salários: </span>{vaga.salario}</p>
            </S.SalarioVaga>
          </S.CardVagas>
        ))}
      </S.ContainerCardVagas>
  );
};

export default CardVagas;
