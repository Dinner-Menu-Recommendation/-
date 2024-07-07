import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import PATH from "./path";
import Test from "../pages/test/Test";
import Result from "../pages/result/Result";
import WithoutHeaderLayout from "../components/layouts/WithoutHeaderLayout";
import WithHeaderLayout from "../components/layouts/WithHeaderLayout";

const router = createBrowserRouter([
  {
    element: <WithoutHeaderLayout />,
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.RESULT,
        element: <Result />,
      },
    ],
  },
  {
    element: <WithHeaderLayout />,
    children: [
      {
        path: PATH.TEST,
        element: <Test />,
      },
    ],
  },
]);

export default router;
