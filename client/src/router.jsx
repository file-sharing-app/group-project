import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Regster";
import Login from "./pages/Login";
import LayOut from "./layout/layout";
import HomePage from "./views/homepage";
import Sender from "./views/sender";
import Reciever from "./views/reciever";

const auth = () => {
  if (!localStorage.access_token) {
    return redirect("/login");
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    loader: () => localStorage.getItem("access_token") && redirect("/"),
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => localStorage.getItem("access_token") && redirect("/"),
  },
  {
    loader: auth,
    children: [
      {
        path: "/",
        element: <LayOut />,
        loader: auth,

        children: [
          {
            path: "/",
            element: <HomePage />,
            loader: auth,
          },
        ],
      },
      {
        path: "/sender",
        element: <LayOut />,
        loader: auth,

        children: [
          {
            path: "/sender",
            element: <Sender />,
            loader: auth,
          },
        ],
      },
      {
        path: "/reciever",
        element: <LayOut />,
        loader: auth,

        children: [
          {
            path: "/reciever",
            element: <Reciever />,
            loader: auth,
          },
        ],
      },
    ],
  },
]);
export default router;
