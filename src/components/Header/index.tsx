import { NavMenu } from "../NavMenu";
import * as S from "./styled";

export const Header = () => {
  return (
    <S.Header>
      <S.H1>Corp Solutions</S.H1>
      <NavMenu />
    </S.Header>
  );
};
