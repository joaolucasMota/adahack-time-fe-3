// src/types.d.ts

export interface IFeedback {
    nome: string;
    data: string;
    descricao: string;
    nivelInclusao: 'baixo' | 'regular' | 'alto';
    nivelDiversidade: 'baixo' | 'regular' | 'alto';
    apoioPCD: boolean;
  }

  export interface IEmpresa {
    id: string;
    nome: string;
    setor: string;
    descricao: string;
    mediaAvaliacao: 'positiva' | 'atenção' | 'neutra' | 'regular';
    local: string;
    qtdVagas: number;
    pcd: boolean;
    feedbacks: IFeedback[];
    vagas: IVaga[];
  }

  export interface IVaga {
    id: number;
    dataPublicacao: string;
    nomeVaga: string;
    salario: string;
    aceitaPCD: boolean;
    vagaAfirmativa: boolean;
    quantidadeVagas: string;
  }

