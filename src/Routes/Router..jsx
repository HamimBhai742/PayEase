import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SendMoney from "../Pages/SendMoney/SendMoney";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    },
    {
        path: "/send-money",
        element:<SendMoney/>
    }
]);

export default router;
