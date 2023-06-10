import React from "react";
import { Navigate } from "react-router-dom"

const Login = React.lazy(() => import('pages/Login'))
const Home = React.lazy(() => import('pages/Home/Home'))

const router = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  }
]

export default router