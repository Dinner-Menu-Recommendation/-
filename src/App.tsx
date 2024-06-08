import { Reset } from "styled-reset";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./styles/GlobalStyle";

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
