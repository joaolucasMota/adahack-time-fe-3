declare type EmpresaProps = {
    nome: string,
    setor: string,
    mediaAvaliacao: 'positiva' | 'regular' | 'negativa' | 'neutra',
    local: string,
    qtdVagas: number
  }