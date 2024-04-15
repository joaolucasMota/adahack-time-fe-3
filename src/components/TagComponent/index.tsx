import { Accessibility, MapPinned, BriefcaseBusiness } from "lucide-react"
import * as S from "./styled"

export type IconVariant = 'PCDs' | 'endereco' | 'vagas';
export type TextSize = 'small' | 'medium' | `large`;

interface ITagComponentProps {
    variant: IconVariant,
    textSize?: TextSize,
    text: string,
}

export const TagComponent = ( { variant, text, textSize }:ITagComponentProps ) => {
    return (
        <S.Container>
            {   
                (variant == 'PCDs') ? <Accessibility size={20} /> :
                (variant == 'endereco') ? <MapPinned size={20} /> :
                <BriefcaseBusiness size={20} />
            }
            <p className={textSize}>{text}</p>
        </S.Container>
    )
}