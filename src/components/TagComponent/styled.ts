import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    gap: .25em;

    p { transition: .1s; }
    .small { font-size: 14px }
    .medium { font-size: 16px; }
    .large { font-size: 18px; }

    @media screen and (max-width: 480px) 
    {
        .small { font-size: 12px }
        .medium { font-size: 14px; }
        .large { font-size: 16px; }
    }
`;