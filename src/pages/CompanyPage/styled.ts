import styled from "styled-components";

export const PageContainer = styled.div`

`;

export const CompanyInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    h1
    {
        font-size: 24px;
    }

    pre
    {
        max-width: 720px;
        white-space: pre-wrap;
        font-family: inherit;
        text-align: justify;
        line-height: 1.5;
    }
`;

export const CompanyInfoTagsContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    gap: .5em 2em;
`;