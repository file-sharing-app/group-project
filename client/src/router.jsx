import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Regster";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
