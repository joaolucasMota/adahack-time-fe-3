import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    color: inherit;
    padding: .5em;
    gap: .25em;
    
    &:hover
    {
        transition: .1s;
        color: var(--blue-color);
    }
`;