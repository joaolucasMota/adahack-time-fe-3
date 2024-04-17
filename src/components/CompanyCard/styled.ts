import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover
    {
        outline: 1px solid var(--orange-color);
        border-radius: 8px;
    }
`;

export const Container = styled.div`
    border: 1px solid var(--bg-color-03);
    background-color: var(--bg-color-02);
    color: var(--text-color-01);
    height: fit-content;
    border-radius: 8px;
    max-width: 320px;
    padding: 1em;
    height: 100%;

    @media screen and (max-width: 800px)
    {
        max-width: none;
    }
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
    padding-top: .5em;
`;