import styled from "styled-components";

export const FooterContainer = styled.footer`
    border-top: 2px solid var(--bg-color-03);
    background-color: var(--bg-color-02);
    min-height: 80px;
    margin-top: 2em;
    padding: 1em 2em;
    width: 100%;

    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

    @media (max-width: 768px)
    {
        justify-content: space-around;
    }
`

export const Bold = styled.div`
    p 
    {
        font-weight: bold;
    }
`

export const CompanyName = styled.address`
    p
    {
        color: var(--text-color-01);
        font-style: italic;
        font-weight: 600;
        font-size: 12px;
    }
`

export const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .25em 1em;

    button
    {
        background-color: transparent;
        color: var(--text-color-01);
        text-decoration: underline;
        padding: .25em .5em;
        cursor: pointer;
        border: none;
    }

    button:hover
    {
        color: var(--blue-color);
    }

    @media screen and (max-width: 480px) 
    {
        justify-content: space-around;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 1em;
    
    div
    {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    @media (max-width: 768px) 
    {
        flex-direction: column;
        align-items: center;
    }
`