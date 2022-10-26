import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ol,ul,li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
