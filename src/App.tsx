import { Reset } from "styled-reset";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; 
  }
`;
const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
