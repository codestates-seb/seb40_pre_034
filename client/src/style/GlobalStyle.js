import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    /* 
    적용시 에디터에서 list 디자인이 정상적으로 나오지 않음
        ol,ul,li {
            list-style: none;
        } 
    */

    a {
        text-decoration: none;
    }
    
    table, td {
        border: 1px solid #000;
        border-collapse: collapse;
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
