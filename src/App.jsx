import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/home/:id",
      element: <Home/>,
    },
    {
      path: "/product/:idprod",
      element: <Product/>,
    },
  ]);

  return (
    <>
         <RouterProvider router={router} />

    </>
  )
}

export default App
