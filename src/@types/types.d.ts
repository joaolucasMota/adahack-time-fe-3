import { IVaga } from "../interfaces/empresa.interface"

declare type EmpresaProps = {
    id: string,
    nome: string,
    setor: string,
    mediaAvaliacao: 'positiva' | 'regular' | 'negativa' | 'neutra',
    local: string,
    qtdVagas: number,
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