import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonContainer = styled(Link)`
    border: 2px solid var(--dark-green-color);
    background-color: var(--dark-green-color);
    color: var(--text-color-01);
    display: inline-block;
    text-decoration: none;
    border-radius: 8px;
    user-select: none;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    color: #fff;
    @media (max-width: 992px) 
        {
        font-size: .8em;
        }
    
    &:hover
    {
        transition: .15s;
        background-color: var(--green-color);
    }
`;
