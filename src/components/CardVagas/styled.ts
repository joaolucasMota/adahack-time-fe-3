import styled from "styled-components";

export const CardVagas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 320px;

    background-color: var(--bg-color-02);
    border: 1px solid var(--bg-color-03);
    border-radius: 8px;
    padding: 1em;
`;

export const DataPublicacao = styled.p`
    margin-bottom: .5em;
    font-weight: 500;
    text-align: end;
    font-size: 14px;
`;

export const NomeVaga = styled.div`
    font-weight: bold;
    font-size: 16px;
`;

export const HR = styled.div`
    border: 1px solid var(--text-color-01);
    margin: 1em 0;
`;

export const VagaAfirmativa = styled.p`
    padding-bottom: 1em;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
`;

export const DivInformacoes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DivSalarioVaga = styled.div`
    align-items: center;
    padding-top: 1em;
    font-size: 14px;
    align-self: end;
    display: flex;
    gap: .5em;

    span
    {
        font-weight: bold;
    }
`;