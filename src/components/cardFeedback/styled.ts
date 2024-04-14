import styled from "styled-components";

export const Container = styled.div`
    display: block;
    background-color: var(--color-02);
    font-weight: 300;
    margin:1rem auto;
    border: 1px solid var(--color-04);
    border-radius: 0.5rem;
    padding: 0.5rem;
`;
export const ContainerRow = styled.div`
    display: flex;
    justify-content: space-between;
    h2{
        font-size: small;
        margin-bottom: 0.5rem;
    }
    p{
        font-size: small;
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