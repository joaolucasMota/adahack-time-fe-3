import styled from "styled-components";


export const ContainerCardVagas = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  padding: 20px;
`;

export const CardVagas = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
width: 280px;
height: 220px;
background-color: #FCF5EB;
border: 1px solid #D5C4A1;
border-radius: 8px;
padding: 10px;
cursor: pointer;
`;

export const DataPublicacao = styled.p`
text-align: end;
/*border: 1px solid rebeccapurple;*/
`;

export const NomeVaga = styled.div`
font-size: 18px;
font-weight: bold;
text-align: center;

hr{
  border: 1px solid black;
}

`;

export const SalarioVaga = styled.div`
text-align: end;

span{
  font-weight: bold;
}
`;


export const QuantidadeVagas = styled.div`

display: flex;
justify-content: space-between;
width: 100%;

p {
  display: flex;
  font-size: 15px;
}
`;

export const VagaAfirmativa = styled.div `
  width: 100%;
  /*border: 1px solid black;*/
`

