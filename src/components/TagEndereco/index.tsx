import { MapPinned } from "lucide-react"
import * as S from "./styled"

interface ITagEnderecoProps {
    Endereco: string
}

export const TagEndereco = ( { Endereco}:ITagEnderecoProps ) => {
    return (
        <S.EnderecoContainer>
            <MapPinned size={20} />
            <p>{Endereco}</p>
        </S.EnderecoContainer>
    )
}