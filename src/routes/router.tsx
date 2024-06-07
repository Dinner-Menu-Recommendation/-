import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import PATH from "./path";
import Test from "../pages/test/Test";
import Result from "../pages/result/Result";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.TEST,
    element: <Test />,
  },
  {
    path: PATH.RESULT,
    element: <Result />,
  },
]);

export default router;
