import * as S from "./styled"
import {IFeedback} from '../../interfaces/empresa.interface'
import { FC } from "react"

interface ICardFeedBackProps{
    feedback: IFeedback
}

export const CardFeedBack:FC<ICardFeedBackProps> = ({feedback}) => {

  return (
    <S.Container>
        <S.ContainerRow>
              <h2>{feedback.nome}</h2>
              <h2>{feedback.data}</h2>
        </S.ContainerRow>
        <S.ContainerDescription>
            <p>{feedback.descricao}</p>
          </S.ContainerDescription>
              <S.ContainerRow>
                <p>Nível de Inclusão: <span>{feedback.nivelInclusao}</span></p>
                <p>Apoio à PCDs: <span>{feedback.apoioPCD ? 'sim' : 'não'}</span></p>
              </S.ContainerRow>
              <S.ContainerRow>
                <p>Nível de Diversidade: <span>{feedback.nivelDiversidade}</span></p>
                <p>Salários: <span>A combinar</span></p>
              </S.ContainerRow>
    </S.Container>
  )
}