import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    gap: 1em;

    padding: 2em 2em 1em 2em;
    border-bottom: 2px solid;
    margin-bottom: 2em;
    max-width: 100%;

    * 
    {
        transition: .25s;
    }

    h1
    {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
  
        text-transform: uppercase;
        font-weight: 500;
        font-size: 18px;
    }

    p
    {
        padding-bottom: .5em;
        font-weight: 400;
    }

    a
    {
        color: inherit;
    }

    @media screen and (max-width: 768px) 
    {
        h1 
        {
            max-width: 320px;
            font-size: 16px; 
        }

        p 
        { 
            font-size: 14px;
        }

        svg 
        {
            width: 32px;
            height: 32px;
        }
    }

    @media screen and (max-width: 480px) 
    {
        h1 
        {
            max-width: 280px;
        }
    }
`;