import React from "react";
import { Navigate } from "react-router-dom"

const Login = React.lazy(() => import('pages/Login'))

const router = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default router