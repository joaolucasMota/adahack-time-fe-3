import { useState } from "react";
import * as S from "./styled";
import { CaseSensitive, Contrast, Menu, X } from "lucide-react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Nav $showMenu={isOpen}>
        <button id="burger-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
        <ul>
          <li>
            <button>
              <Contrast /> Alternar contraste da página
            </button>
          </li>
          <li>
            <button>
              <CaseSensitive /> Alternar tamanho da fonte
            </button>
          </li>
        </ul>
      </S.Nav>
    </>
  );
};

export default NavMenu;
