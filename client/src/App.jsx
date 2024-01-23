import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import './App.css'
import LayOut from './layout/layout'
import HomePage from './views/homepage'
import Sender from './views/sender'
import Reciever from './views/reciever'

const router = createBrowserRouter([
  {
    path: "/register",
  },
  {
    path: "/login",
  },
  {
    // loader: ()=> !localStorage.getItem("access_token") && redirect("/login"),
    children: [
      {
        path: "/",
        element: <LayOut/>,
        children:[
          {
        path: "/",
        element: <HomePage/>,
          }
        ]
      },
      {
        path: "/sender",
        element: <LayOut/>,
        children:[
          {
        path: "/sender",
        element: <Sender/>,
          }
        ]
      },
      {
        path: "/reciever",
        element: <LayOut/>,
        children:[
          {
        path: "/reciever",
        element: <Reciever/>,
          }
        ]
      },
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
