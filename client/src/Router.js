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
import ErrorPage from "./pages/ErrorPage";
import Inbox from "./pages/Inbox";
import HomeContainer from "./containers/HomeContainer";
import AuthContainer from "./containers/AuthContainer";
import Notification from './pages/Notifications';
import Curriculum from "./pages/Curriculum";

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

  useEffect(() => {
    const token = getItem('token')
    if (token) {
      const userInfo = JSON.parse(token)
      navigate('/dashboard', { replace: true })
    }
  }, [userState])

  useEffect(() => {
    const token = getItem('token')
    if (!token) {
      if (location.pathname !== '/login' && location.pathname !== '/register') {
        navigate('/login', { replace: true })
      }
    }
  }, [location.pathname])

  return (
    <Box height='100vh'>
      <ErrorDisplay show={show} setShow={setShow} error={userState.error} />
      <Routes>
        <Route element={<HomeContainer />} path='dashboard'>
          <Route element={<Notification />} path='notifications' />
          <Route element={<Inbox />} path='inbox' />
          <Route element={<Curriculum />} path='curriculum' />
          <Route element={<Home />} index path='/dashboard' />
        </Route>
        <Route element={<AuthContainer />} path='/'>
          <Route element={<Register />} path='register' />
          <Route element={<Login />} path='login' /> 
        </Route>
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </Box>
  )
}

export default Router;
