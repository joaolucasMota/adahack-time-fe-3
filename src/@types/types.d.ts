import { IFeedback, IVaga } from "../interfaces/empresa.interface"

declare type EmpresaProps = {
    id: string,
    nome: string,
    setor: string,
    descricao: string,
    mediaAvaliacao: 'positiva' | 'regular' | 'negativa' | 'neutra',
    local: string,
    qtdVagas: number,
    pcd: boolean,
    feedbacks: IFeedback[],
    vagas: IVaga[]
}

declare interface VagaProps {
    id: string,
    dataPublicacao: string,
    nomeVaga: string,
    salario: string,
    vagaAfirmativa: boolean,
    quantidadeVagas: string,
    aceitaPCD: boolean,
}
declare interface FeedbackProps {
    nome: string;
    data: string;
    descricao: string;
    nivelInclusao: 'baixo' | 'regular' | 'alto';
    nivelDiversidade: 'baixo' | 'regular' | 'alto';
    apoioPCD: boolean;
}