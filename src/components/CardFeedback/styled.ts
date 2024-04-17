import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color-02);
    font-weight: 300;
    border: 1px solid var(--bg-color-03);
    border-radius: 8px;
    padding: 1em;
    height:100%;

    @media screen and (max-width: 800px)
    {
        max-width: none;
    }
`;
export const ContainerRow = styled.div`
    display: flex;
    justify-content: space-between;
    h2{
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 0.25em;
    }
    p{
        font-size: 12px;
        font-weight: 600;
        margin-top: 0.25rem;
        span{
            text-decoration: underline;
        }
    }
`;
export const ContainerDescription = styled.div`
margin: 0.5rem 0;
`;