import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonContainer = styled(Link)`
    a
    {
        border: 2px solid var(--dark-green-color);
        background-color: var(--dark-green-color);
        color: var(--text-color-01);
        text-decoration: none;
        border-radius: 8px;
        user-select: none;
        font-weight: bold;
        padding: 1em;
        color: #fff;
    }
    
    a:hover
    {
        transition: .15s;
        background-color: var(--green-color);
    }
`;
