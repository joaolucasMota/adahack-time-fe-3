import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLElement> { 
    $showMenu: boolean;
}

export const Nav = styled.nav<IProps>`
    button
    {
        background: none;
        cursor: pointer;
        border: none;
    }

    #burger-menu-btn 
    {
        display: none;
        color: #fff;
    }

    ul 
    {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    ul li button 
    {
        display: flex;
        align-items: center;
        gap: .5em;
        
        color: var(--bg-color-02);
        position: relative;
        font-weight: 500;
        font-size: 12px;
        padding: .5em;

        /* hover animation */
        &::after 
        {
            content: "";
            background-color: var(--bg-color-02);
            position: absolute;
            transition: 0.25s;
            bottom: -2px;
            height: 2px;
            width: 0px;
            left: 0;
        }

        &:hover::after 
        {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) 
    {
        #burger-menu-btn 
        {
            display: flex;
        }

        ul 
        {
            display: ${(props) => (props.$showMenu ? "flex" : "none")};

            border-bottom: 2px solid var(--bg-color-03);
            border-left: 2px solid var(--bg-color-03);
            background-color: var(--bg-color-02);
            border-radius: 0 0 0 8px;
            
            flex-direction: column;
            gap: .5em;

            position: absolute;
            padding: 1em;
            width: 280px;
            top: 64px;
            right: 0;           

            li button 
            {
                color: var(--text-color-01);
                &::after { background-color: var(--text-color-01); }
            }
        }
    }
`;