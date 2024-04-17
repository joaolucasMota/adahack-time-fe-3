import * as S from "./styled.ts";


export const Loading = () => {
  return (
    <S.Container>
      <h2>Carregando...</h2>
      <S.LoadingCircle />
    </S.Container>
  );
};

