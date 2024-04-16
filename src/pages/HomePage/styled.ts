import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100svh;
`;

export const SearchBarDiv = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1920px;
    margin: 2em auto;
`;

export const Container = styled.div`
    flex: 1;

    @media screen and (max-width: 800px) 
    {
        display: block;
    }
`;

export const Grid = styled.div`
    max-width: 1920px;
    margin: 2em auto;

    grid-template-columns: repeat(auto-fill, 320px);
    justify-content: center;
    display: grid;
    gap: 1em;

    @media screen and (max-width: 800px) 
    {
        display: flex;
        flex-direction: column;
    }
`;