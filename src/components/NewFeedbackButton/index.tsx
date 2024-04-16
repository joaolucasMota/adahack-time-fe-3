import { MessageCirclePlus } from "lucide-react"
import { Link } from "react-router-dom"
import * as S from "./styled"

export const NewFeedbackButton = () => {
    return (
        <S.Container>
            <Link to={"#"}>
                <MessageCirclePlus size={24} />
                <p>Adicionar Feedback</p>
            </Link>
        </S.Container>
    )
}