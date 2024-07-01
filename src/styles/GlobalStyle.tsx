import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #1B1B1C;
    --gray: #999987;
  }

  html {
    font-size: 62.5%; 
  }
  * {
    box-sizing: border-box;
    height: 100vh;
    background: #FDF2E0;

  }
`;

export default GlobalStyle;
