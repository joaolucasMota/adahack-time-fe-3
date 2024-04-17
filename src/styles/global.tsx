import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root 
    {
        --bg-color-01:      #FFFFFF;
        --bg-color-02:      #FCF5EB;
        --bg-color-03:      #D5C4A1;
        --text-color-01:    #3C3836;
        --dark-green-color: #427B58;
        --green-color:      #689D6A;
        --blue-color:       #458588;
        --yellow-color:     #D79921;
        --red-color:        #CC241D;
        --purple-color:     #B16286;
        --orange-color:     #D65D0E;
    }

    .contrast
    {
        --dark-green-color: #426744;
        --green-color:      #2A412B;
        --blue-color:       #244547;
        --yellow-color:     #543C0D;
        --red-color:        #811612;
        --purple-color:     #633147;
        --orange-color:     #6E3007;
    }

    .fontSize p
    {
        font-size: 24px;
    }

    .fontSize h1
    {
        font-size: 32px;
    }

    .fontSize h2
    {
        font-size: 28px;
    }

    ::selection
    {
        background-color: #3c383680;
    }

    * 
    {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body
    {
        font-family: "Montserrat", sans-serif;
        color: var(--text-color-01);
        line-height: 1.5;
    }

    /* -----  ----- ScrollBar -----  ----- */

    ::-webkit-scrollbar 
    {
        height: .75em;
        width: 1em;
    }

    ::-webkit-scrollbar-track 
    {
        background: #3c3836;
    }

    ::-webkit-scrollbar-thumb 
    {
        border: 2px solid #3c3836;
        box-sizing: border-box;
        border-radius: 8px;
        background: #555; 
    }

    ::-webkit-scrollbar-thumb:hover 
    {
        background: #777; 
    }
`;