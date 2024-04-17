import { Building, CircleArrowLeft, Settings } from "lucide-react"
import { Link } from "react-router-dom"
import * as S from "./styled"

export type SectionPage = 'home' | 'settings' | 'company';

interface ISectionHeaderProps {
    page: SectionPage,
    mainText?: string,
    subText?: string
}

export const SectionHeader  = ( { page, mainText, subText }:ISectionHeaderProps ) => {
    return (
        <S.Container>
            {   
                (page == 'home') ? <div><Building size={42} absoluteStrokeWidth /></div> :
                (page == 'settings') ? <div><Settings size={42} absoluteStrokeWidth /></div> :
                <Link to={"/home"}><CircleArrowLeft size={42} absoluteStrokeWidth /></Link>
            }
            <div>
                <h1>{mainText}</h1>
                <p>{subText}</p>
            </div>
        </S.Container>
    )
}