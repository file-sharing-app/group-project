import { io } from "socket.io-client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import router from './router'
// import "./App.css";
// import LayOut from "./layout/layout";
// import HomePage from "./views/homepage";
// import Sender from "./views/sender";
// import Reciever from "./views/reciever";
import { createContext } from "react";

// const router = createBrowserRouter([
//   {
//     path: "/register",
//     element: <></>
//   },
//   {
//     path: "/login",
//   },
//   {
//     // loader: ()=> !localStorage.getItem("access_token") && redirect("/login"),
//     children: [
//       {
//         path: "/",
//         element: <LayOut />,
//         children: [
//           {
//             path: "/",
//             element: <HomePage />,
//           },
//         ],
//       },
//       {
//         path: "/sender",
//         element: <LayOut />,
//         children: [
//           {
//             path: "/sender",
//             element: <Sender />,
//           },
//         ],
//       },
//       {
//         path: "/reciever",
//         element: <LayOut />,
//         children: [
//           {
//             path: "/reciever",
//             element: <Reciever />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const socket = io("http://localhost:3000");
export const SocketContext = createContext(null);

function App() {

  return (
    <SocketContext.Provider value={{socket}}>
      <RouterProvider router={router} />
    </SocketContext.Provider>
  );
}

export default App;
