import { InputComponent } from "../../components/Input";
import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100svh;
`;

export const SearchInput = styled(InputComponent)`
    @media screen and (max-width: 300px) 
    {
        width: 90%;
    }
`;

export const SearchBarDiv = styled.div`
    background-color: var(--bg-color-02);
    border: 1px solid var(--bg-color-03);
    border-radius: 8px;
    padding: 1em 2em;

    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 1660px;
    flex-wrap: wrap;
    margin: auto;
    gap: 1em;

    @media screen and (max-width: 800px) 
    {
        justify-content: space-around;
        /* margin: 0 1em; */
    }
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
        padding: 0 1em;
    }
`;

export const Select = styled.select`
    border: 1px solid var(--bg-color-03);
    background-color: var(--bg-color-01);
    border-radius: .5rem;
    font-size: 1rem;
    padding: 1rem;
    outline: none;
    
    option
    {
        border: none;
    }

    &:focus 
    {
        border-color: var(--bg-color-03);
        box-shadow: 0 0 5px var(--bg-color-03);
    }
`;