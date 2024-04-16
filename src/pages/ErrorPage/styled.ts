import styled from "styled-components";

export const FlexContainer = styled.div`
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100svh;
    gap: 2em;

    background-color: var(--bg-color-03);
    color: var(--text-color-01);

    text-align: center;
    padding: 1em;

    h1
    {
        max-width: 280px;
        font-size: 16px;
    }

    span
    {
        font-size: 48px;
    }

    a
    {
        border: 2px solid var(--dark-green-color);
        background-color: var(--dark-green-color);
        color: var(--text-color-01);
        text-decoration: none;
        border-radius: 8px;
        user-select: none;
        font-weight: bold;
        padding: 1em;
        color: #fff;
    }

    a:hover
    {
        transition: .15s;
        background-color: var(--green-color);
    }
`;
