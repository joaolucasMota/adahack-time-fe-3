import styled from "styled-components";

export const PageContainer = styled.div`

`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 2em;
    gap: 3em;

    @media screen and (max-width: 800px)
    {
        margin: 1em;

        h2
        {
            font-size: 16px;
        }
    }
`;

export const CompanyInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    h2
    {
        font-size: 24px;
        font-weight: 600;
    }

    pre
    {
        max-width: 720px;
        white-space: pre-wrap;
        margin-bottom: .75em;
        font-family: inherit;
        text-align: justify;
        line-height: 1.5;
    }
`;

export const CompanyInfoTagsContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    gap: 1em 2em;
`;

export const GridFeedback = styled.div`
    grid-template-columns: repeat(auto-fill, 480px);
    justify-content: center;
    display: grid;
    gap: 1em;

    @media screen and (max-width: 800px)
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    }
`;

export const GridVagas = styled.div`
    grid-template-columns: repeat(auto-fill, 320px);
    justify-content: center;
    display: grid;
    gap: 1.5em;

    @media screen and (max-width: 800px)
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    }
`;

export const DivSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5em 2em;

    h2
    {
        font-size: 24px;
        font-weight: 600;
    }

    @media screen and (max-width: 800px)
    {
        justify-content: center;
        
        h2
        {
            font-size: 20px;
        }
    }
`;