import styled from 'styled-components';


export const Grid = styled.div`
    margin-top: 2em;
    grid-template-columns: repeat(auto-fill, 360px);
    justify-content: center;
    display: grid;
    gap: 1em;


    @media screen and (max-width: 800px)
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 2em auto;

    }
`;
