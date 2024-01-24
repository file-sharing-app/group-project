import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Regster";
import Login from "./pages/Login";
import LayOut from './layout/layout'
import HomePage from './views/homepage'
import Sender from './views/sender'
import Reciever from './views/reciever'


export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    loader: ()=> !localStorage.getItem("access_token") && redirect("/login"),
    children: [
      {
        path: "/",
        element: <LayOut />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        path: "/sender",
        element: <LayOut />,
        children: [
          {
            path: "/sender",
            element: <Sender />,
          },
        ],
      },
      {
        path: "/reciever",
        element: <LayOut />,
        children: [
          {
            path: "/reciever",
            element: <Reciever />,
          },
        ],
      },
    ],
  },
]);
export default router;
