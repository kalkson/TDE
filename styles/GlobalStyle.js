import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        transition: color 250ms ease-in-out;
    }

    :root {
        --primaryColor: #152548;
        --secondaryColor: #fbac47;
        --bgColor: #FBFBFB;
        --darkerBgColor: #171515;
        background-color: var(--bgColor);
        scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Montserrat', sans-serif;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    .active-nav-button {
        & > button {
            
            & > .nav__button__background {
                transform: translateX(0);
            }

            & > span {
                font-weight: 700;
            }
        }
    }


`;

export default GlobalStyle;
