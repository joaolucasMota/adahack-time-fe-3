import { VagaProps } from '../../@types/types';
import { TagComponent } from '../TagComponent';
import * as S from "./styled";

interface IVaga {
    vaga: VagaProps;
}

export const CardVagas = ( { vaga }:IVaga ) => {
  return (
    <S.CardVagas key={vaga.id}>

        <S.DataPublicacao>
            { vaga.dataPublicacao }
        </S.DataPublicacao>

        <S.NomeVaga title={ vaga.nomeVaga }>
            { vaga.nomeVaga }
        </S.NomeVaga>
        
        <S.HR />

        <S.VagaAfirmativa>{vaga.vagaAfirmativa ? "Vaga afirmativa para negros & pardos" : "Todos os candidatos qualificados são bem-vindos a se candidatar"}</S.VagaAfirmativa>

        <S.DivInformacoes>
            <TagComponent variant='PCDs' text={ vaga.aceitaPCD ? "Aceita PCD" : "Não aceita PCD" } />
            <TagComponent variant='vagas' text={ vaga.quantidadeVagas } />
        </S.DivInformacoes>

        <S.DivSalarioVaga>
            <span>Salários:</span>
            <p>{ vaga.salario }</p>
        </S.DivSalarioVaga>
    </S.CardVagas>
  );
};