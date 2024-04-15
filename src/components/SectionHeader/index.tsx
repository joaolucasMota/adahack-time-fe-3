import { Building, CircleArrowLeft, Settings } from "lucide-react"
import { Link } from "react-router-dom"
import * as S from "./styled"

export type SectionVariant = 'homepage' | 'settings' | 'company';

interface ISectionHeaderProps {
    variant: SectionVariant,
    mainText: string,
    subText: string
}

export const SectionHeader  = ( { variant, mainText, subText }:ISectionHeaderProps ) => {
    return (
        <S.Container>
            {   
                (variant == 'homepage') ? <Building size={48} /> :
                (variant == 'settings') ? <Settings size={48} /> :
                <Link to={"/"}><CircleArrowLeft size={48} /></Link>
            }
            <div>
                <h1>{mainText}</h1>
                <p>{subText}</p>
            </div>
        </S.Container>
    )
}