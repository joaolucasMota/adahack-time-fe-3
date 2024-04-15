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
justify-content: center;
text-align: center;
width: 280px;
height: 220px;
background-color: var(--bg-color-02);
border: 1px solid var(--bg-color-03);
border-radius: 8px;
padding: 15px;
`;

export const DataPublicacao = styled.p`
text-align: end;
/*border: 1px solid rebeccapurple;*/
margin: 0;
`;

export const NomeVaga = styled.div`
font-size: 18px;
font-weight: bold;
text-align: center;

hr{
  margin: 0;
  border: 1px solid black;
}

`;

export const SalarioVaga = styled.div`
text-align: end;

p {
  margin: 8px;
}

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
  margin: 0;
  font-size: 19px;
}
`;

