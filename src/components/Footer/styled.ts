import styled from "styled-components";


export const FooterContainer = styled.footer`
    width: 100%;
    background-color: var(--bg-color-02);
    border-top:  1px solid var(--yellow-color);
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 1em;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-wrap:wrap-reverse ;
    gap:1em;

    min-height: 85px;
    @media (max-width: 768px) {
        justify-content: space-around;

    }
`

export const CompanyName = styled.address`
    p{
        margin-left: 15px;
        color: black;
        font-weight: 500;
    }

`   
export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:.5em;

    
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2px;
        font-size: smaller;
        color: black;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.5s;
        gap:.5em;
    }

    li:hover{
        font-weight: 600;   
    }

    li > span:first-child{
        text-decoration: none;
    }
    li > span {
        text-decoration: underline;
    }
`

export const Nav = styled.nav`
    display: flex;
    gap:1em;
    div{
        color:black;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: .5em;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
}
`