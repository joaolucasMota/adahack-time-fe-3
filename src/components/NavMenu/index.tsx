import { CaseSensitive, Contrast, Menu, X } from "lucide-react";
import { useState } from "react";
import * as S from "./styled";

export const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [contrast, setContrast] = useState(true);

    const HandleClick = () => {
        setContrast(!contrast);
        document.body.classList.toggle('contrast', contrast);
    }

    const [fontSize, setSize] = useState(true);

    const HandleFontSize = () => {
        setSize(!fontSize);
        document.body.classList.toggle('fontSize', fontSize);
    }

    return (
        <S.Nav $showMenu={isOpen}>
            <button id="burger-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
            <ul>
                <li><button onClick={HandleClick}><Contrast /> Alternar contraste da página</button></li>
                <li><button onClick={HandleFontSize}><CaseSensitive /> Alternar tamanho da fonte</button></li>
            </ul>
        </S.Nav>
    );
};