import React from 'react'
import { createBrowserRouter } from "react-router";
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Login from '../page/Login';

  const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    children:[
        {
            index:true,
            element: <Login/>
        }
    ]
  },

  {
    path:'/app',
    element: <MainLayout/>
  }
]);


export default router