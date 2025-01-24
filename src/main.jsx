import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx'
import Details from './Components/Details.jsx'
import Login from './Components/Login.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root></Root>,
    children:[
      {
        path:'/',
        loader:() => fetch('donate.json'),
        element: <Home></Home>
      },
      {
        path:'/details',
        element: <Details></Details>,
  },

  {
    path:'/login',
  element: <Login></Login>,
  },
  
    ]

},

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
 </StrictMode>,
)
