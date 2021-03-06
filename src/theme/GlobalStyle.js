import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* #02353B */

    html {
        --font-size-default: 1.8rem;
        --font-size-mobile: 1.6rem;
        --text-primary: #02353B;
        --bg-gradient: linear-gradient(to top right, rgba(236, 143, 91, 0.8), rgba(237, 240, 99, 0.8));

        font-family: "Inter", sans-serif;
        font-variant-numeric: slashed-zero;
        color: var(--text-primary);
    }

    h1 {
        font-size: 2.8rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: var(--text-primary);
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
        display: block;
        position: relative;

        &::after {
            content: '';
            display: block;
            position: absolute;
            height: 7px;
            top: 1.5rem;
            background: var(--bg-gradient);
            opacity: 0.6;
            width: 8rem;
            z-index: -1;
        }
    }

    h3 {
        font-size: 1.8rem;
        font-weight: 500;
    }

    p {
        font-size: var(--font-size-default);
    }
`;

export default GlobalStyle;