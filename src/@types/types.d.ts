import { IVaga } from "../interfaces/empresa.interface"

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
    quantidadeVagas: string,
    aceitaPCD: boolean,
}