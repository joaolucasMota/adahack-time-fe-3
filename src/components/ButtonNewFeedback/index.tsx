import { MessageCirclePlus } from "lucide-react"
import * as S from "./styled"
import { Link } from "react-router-dom"

export const ButtonNewFeedback = () => {
    return (
        <S.NewFeedbackContainer>
            <Link to={"#"}>
                <MessageCirclePlus size={24} />
                <p>Adicionar Feedback</p>
            </Link>
        </S.NewFeedbackContainer>
    )
}