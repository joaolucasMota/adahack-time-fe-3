import * as S from "./styled"
import { FC } from "react"
import { EmpresaProps } from "../../@types/types"
import { CardFeedBack } from "../CardFeedback"


interface IFeedbackSectionProps{
  company: EmpresaProps
}
export const FeedbackSection:FC<IFeedbackSectionProps> = ({company}) => {

  return (
      <S.Grid>
        {company && company.feedbacks.map((feedback) =>
            <CardFeedBack feedback={feedback} />
        )}
      </S.Grid>
  )
}

