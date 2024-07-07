import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #1B1B1C;
    --gray: #999987;
  }

  html {
    font-size: 62.5%; 
    background: #FDF2E0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
