import React from 'react'
import { createBrowserRouter } from "react-router";
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

import Dashboard from '../page/Dashboard/Dashboard';
import Login from '../page/AuthPage/Login';

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
    path:'/dashboard',
    element: <MainLayout/>,
    children:[
        {
            index: true,
            element: <Dashboard/>
        }
    ]
  }
]);


export default router