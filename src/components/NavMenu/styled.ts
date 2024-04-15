import styled, { keyframes } from "styled-components";

const openMenu = keyframes`
    0% {
        transform: translateY(-15rem);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const closeMenu = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
        display: block;
    }

    100% {
        transform: translateY(-15rem);
        opacity: 0;
        display: none;
    }
`;

interface IProps extends React.HTMLAttributes<HTMLElement> {
  $showMenu: boolean;
}

export const Nav = styled.nav<IProps>`
  #burger-menu-btn {
    display: none;
    cursor: pointer;
    background: none;
    border: none;
    color: #fff;
  }

  ul {
    display: flex;
    gap: 16px;

    li {
      button {
        display: flex;
        align-items: center;
        gap: 8px;
        background: none;
        border: none;
        position: relative;
        font-size: 14px;
        color: var(--bg-color-02);

        &::after {
          content: "";
          position: absolute;
          background-color: var(--bg-color-02);
          height: 2px;
          width: 0;
          left: 0;
          bottom: -5px;
          transition: 0.3s;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #burger-menu-btn {
      display: flex;
      position: absolute;
      top: 20px;
      right: 36px;
      z-index: 999;
    }

    ul {
      background-color: var(--bg-color-02);
      border-bottom: 1px solid var(--bg-color-03);
      border-left: 1px solid var(--bg-color-03);
      border-radius: 0 0 0 8px;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 70px;
      width: 280px;
      height: fit-content;
      padding: 16px;
      display: ${(props) => (props.$showMenu ? "block" : "none")};
      animation: ${(props) => (props.$showMenu ? openMenu : closeMenu)} 0.6s
        ease-in-out;

      li:nth-child(2) {
        margin: 16px 0;
      }

      li {
        button {
          color: var(--color-01);

          &::after {
          background-color: var(--color-01);
          }
        }
      }
    }
  }
`;
