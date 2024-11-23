import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SendMoney from "../Pages/SendMoney/SendMoney";
import CashOut from "../Pages/CashOut/CashOut";
import LoginPage from "../Pages/Login/Login";
import ProtectRoute from "./ProtectRoute/ProtectRoute";
import SignUpPage from "../Pages/Registation/Registation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoute>
        <Root />
      </ProtectRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/send-money",
    element: <SendMoney />,
  },
  {
    path: "/cash-out",
    element: <CashOut />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element:<SignUpPage/>
  }
]);

export default router;
