import { styled, css } from "styled-components";

export type FeedbackVariant = 'positiva' | 'regular' | 'negativa' | 'neutra' | 'error';

type FeedbackProps = {
  variant: FeedbackVariant;
}

const feedbackVariant = {
    positiva: 'var(--green-color)',
    regular: 'var(--yellow-color)',
    negativa: 'var(--red-color)',
    neutra: 'var(--blue-color)',
    error: 'var(--purple-color)',
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5em;
`;

export const Text = styled.p`
    font-weight: 600;
    font-size: 12px;
`;

export const Feedback = styled.p<FeedbackProps>`
    ${ props => { return css`background-color: ${feedbackVariant[props.variant]};` } }
    border-radius: 4px;
    padding: 0 .75em;
    font-size: 12px;
    color: #fff;
`;