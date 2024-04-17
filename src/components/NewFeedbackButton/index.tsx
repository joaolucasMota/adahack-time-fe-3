import { MessageCirclePlus, X } from "lucide-react"
import { useState } from "react"
import * as S from "./styled"
import "./style.css";
import { FeedbackForm } from "../FeedbackForm";

export const NewFeedbackButton = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    // Usar ao final do submit
    // setIsModalOpen(false);

    const HandleClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <S.Container onClick={HandleClick}>
                <MessageCirclePlus size={24} />
                <p>Adicionar Feedback</p>
            </S.Container>

            <div id="PresentationModal" className={`ModalContainer ${isModalOpen ? 'close' : ''}`}>
                <div className="ModalBox"> 
                    <div className="ModalButton" onClick={HandleClick}>
                        <X size={32} />
                    </div>
                    {/* Conteudo do modal */}
                    <FeedbackForm />
                </div>
            </div>
        </>
    )
}