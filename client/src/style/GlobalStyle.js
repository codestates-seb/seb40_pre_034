import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

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
        /* font-family: inherit; */
        display: inline-block;
        cursor: pointer;
        outline: none;
        padding : 0.8em;
        border: none;
        border-radius : 3px;
        font-weight: normal;
        text-align: center;
        text-decoration: none;
        user-select: none;
        box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
        &:hover {
            transition: 0.4s all;
        }
    }
`;

export default GlobalStyles;