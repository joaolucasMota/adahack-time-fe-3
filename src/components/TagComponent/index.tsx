import { Accessibility, MapPinned, BriefcaseBusiness, PersonStanding, Contrast, ALargeSmall } from "lucide-react"
import * as S from "./styled"

export type TextSize = 'small' | 'medium' | `large`;

export type IconVariant = 
    'PCDs' 
    | 'endereco' 
    | 'vagas' 
    | 'acessibilidade' 
    | 'contraste' 
    | 'tamanho-fonte'
;

interface ITagComponentProps {
    variant: IconVariant,
    textSize?: TextSize,
    text?: string,
}

export const TagComponent = ( { variant, text, textSize }:ITagComponentProps ) => {
    return (
        <S.Container>
            {   
                (variant == 'PCDs') ? <Accessibility size={20} /> :
                (variant == 'endereco') ? <MapPinned size={20} /> :
                (variant == 'acessibilidade') ? <PersonStanding size={20} /> :
                (variant == 'contraste') ? <Contrast size={20} /> :
                (variant == 'tamanho-fonte') ? <ALargeSmall size={20} /> :
                <BriefcaseBusiness size={20} />
            }
            <p className={textSize}>{text}</p>
        </S.Container>
    )
}