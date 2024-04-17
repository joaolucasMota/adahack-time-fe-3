import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items:center ;
    justify-content: center;
    background-color: var(--bg-color-02);
    padding: 5rem;
    margin-top: 5rem;
    border-radius: 1rem;
    font-family: "Montserrat", sans-serif;

    label{
        /* margin-top: 0.5em; */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }

    textarea {
        width: 100%;
        height: 7rem;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: none;
  
        &:focus {
            outline: none;
            border-color: var(--bg-color-03);
            box-shadow: 0 0 5px var(--bg-color-03);
        }
    }
`