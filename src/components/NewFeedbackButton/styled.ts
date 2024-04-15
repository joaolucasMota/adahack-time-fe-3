import styled from "styled-components";

export const Container = styled.div`
    a
    {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        gap: .25em;
        width: fit-content;
        color: inherit;
        padding: .5em;
    }

    a:hover
    {
        transition: .1s;
        color: var(--blue-color);
    }
`;