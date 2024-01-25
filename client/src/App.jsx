import { io } from "socket.io-client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import router from "./router";
import { createContext } from "react";

const socket = io("http://localhost:4000");
export const SocketContext = createContext(null);

function App() {
  return (
    <SocketContext.Provider value={{ socket }}>
      <RouterProvider router={router} />
    </SocketContext.Provider>
  );
}

export default App;
