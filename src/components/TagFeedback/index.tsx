import * as S from "./styled"

type FeedbackProps = {
    variant?: S.FeedbackVariant;
  };

export const TagFeedback = ({ variant }: FeedbackProps) => {

    variant = variant == 'positiva' 
    || variant == 'regular' 
    || variant == 'negativa' 
    || variant == 'neutra' ? variant : 'error';

    return (
        <S.Container>
            <S.Text>Avaliação dos Usuários: </S.Text>
            <S.Feedback variant={variant}>{variant}</S.Feedback>
        </S.Container>
    )
}