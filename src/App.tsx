import { Reset } from "styled-reset";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
