import { Accessibility } from "lucide-react"
import * as S from "./styled"

interface ITagPCDs {
    possuiVagas: boolean
}

export const TagPCDs = ( { possuiVagas }:ITagPCDs ) => {
    return (
        possuiVagas?
        (<S.TagPCDsContainer>
            <Accessibility size={20} />
            <p>Está empresa possui vagas para PCDs</p>
        </S.TagPCDsContainer>) : ''
    )
}