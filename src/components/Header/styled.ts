import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--green-color);
    padding: 1em 2em;
    width: 100%;

    ul 
    { 
        list-style: none; 
    }
`;

export const H1 = styled.h1`
    color: var(--bg-color-02);
    transition: .25s;
    font-weight: 900;
    font-size: 24px;

    @media screen and (max-width: 768px)
    {
        font-size: 20px;
    }
`;