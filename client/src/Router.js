import { createBrowserRouter, useLocation, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Box from "./styles/StyledBox";
import Navbar from './components/Navbar'
import ErrorDisplay from "./components/ErrorDisplay";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import useLocalStorage from "./hooks/useLocalStorage";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]
);

const Router = () => {
  const [show, setShow] = useState(false);

  const userState = useSelector(state => state.userReducer)
  const [getItem, setItem] = useLocalStorage()
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    const token = getItem('token')
    if (token) {
      const userInfo = JSON.parse(token)
      navigate('/', { replace: true })
    }
  }, [userState])

  useEffect(() => {
    const token = getItem('token')
    if (token) {
      const userInfo = JSON.parse(token)
      navigate('/', { replace: true })
    } else {
      if (location.pathname !== '/login' && location.pathname !== '/register') {
        navigate('/login', { replace: true })
      }
    }
  }, [location.pathname])

  return (
    <Box height='100vh' padding='70px 0px 0px'>
      <Navbar />
      <ErrorDisplay show={show} setShow={setShow} error={userState.error} />
      <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Register />} path='/register' />
      <Route element={<Login />} path='/login' /> 
      </Routes>
    </Box>
  )
}

export default Router;
