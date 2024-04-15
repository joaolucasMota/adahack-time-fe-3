import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: var(--bg-color-02);
    border: 1px solid var(--bg-color-03);
    color: var(--text-color-01);
    border-radius: 8px;
    max-width: 320px;
    padding: 1em;
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 0.25em;
`;

export const Sector = styled.p`
    font-weight: 500;
    font-size: 14px;
    margin-bottom: .5em;
`;

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;