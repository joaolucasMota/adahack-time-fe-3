// src/types.d.ts

interface IFeedback {
    nome: string;
    data: string;
    descricao: string;
    nivelInclusao: 'baixo' | 'regular' | 'alto';
    nivelDiversidade: 'baixo' | 'regular' | 'alto';
    apoioPCD: boolean;
  }
  
  interface IEmpresa {
    nome: string;
    setor: string;
    descricao: string;
    mediaAvaliacao: 'positiva' | 'atenção' | 'neutra' | 'regular';
    local: string;
    qtdVagas: number;
    pcd: boolean;
    feedbacks: IFeedback[];
  }
  
  export default IEmpresa;
  