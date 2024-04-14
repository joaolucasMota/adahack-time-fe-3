import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    *:focus {
    outline: 0;
    }

    html, body, #root{
    height: 100%;
    
    }

    body{
        font-family: "Montserrat", sans-serif;
        font-weight: 100;
    }

    a,i{
    text-decoration: none;
    color: inherit;
    }

    ul{
    list-style: none;
    }

    button{
    cursor: pointer;
    }
    :root {
        --color-01: #3c3836;
        --color-02: #FCF5EB;
        --color-03: #FFFFFF;
        --color-04: #D5C4A1;
        --color-05: #689D6A;
        --color-06: #458588;
        --color-07: #D79921;
        --color-08: #CC241D;
        --color-09: #427B58;
    
        --color-contrast-05: #2A412B;
        --color-contrast-06: #244547;
        --color-contrast-07: #543C0D;
        --color-contrast-08: #811612;
        --color-contrast-09: #426744;
    } 

`;