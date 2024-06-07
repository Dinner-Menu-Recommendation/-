import { Reset } from "styled-reset";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; 
  }
`;

function App() {
  return (
    <React.Fragment>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
