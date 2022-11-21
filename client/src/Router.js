import { createBrowserRouter, useLocation, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Box from "./styles/StyledBox";
import Navbar from './components/Navbar'
import ErrorDisplay from "./components/ErrorDisplay";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import useLocalStorage from "./hooks/useLocalStorage";
import ErrorPage from "./pages/ErrorPage";
import Inbox from "./pages/Inbox";
import HomeContainer from "./containers/HomeContainer";
import AuthContainer from "./containers/AuthContainer";
import Notification from './pages/Notifications';
import Curriculum from "./pages/Curriculum";
import { checkToken } from "./logic/actions/UserActions";
import LoadingPage from "./components/LoadingPage";
import Users from "./pages/Users";

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
  const { get, set, clear } = useLocalStorage()
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const data = userState.data;
    if (data && data.user !== null) {
      navigate('/dashboard', { replace: true })
    } else {
      if (location.pathname !== '/login' && location.pathname !== '/register') {
        navigate('/login', { replace: true })
      }
    }
  }, [userState]);

  useLayoutEffect(() => {
    const data = userState.data;
    if ((data && data.user !== null) && (location.pathname === '/register' || location.pathname === '/login')) {
      navigate('/dashboard', {replace: true})
    }
  }, [location.pathname])

  useEffect(() => {
    dispatch(checkToken())
  }, [])

  // useEffect(() => {
  //   const token = get('token')
  //   if (!token) {
  //     if (location.pathname !== '/login' && location.pathname !== '/register') {
  //       navigate('/login', { replace: true })
  //     }
  //   }
  // }, [location.pathname])

  return (
    <Box height='100vh'>
      {userState.loading && <LoadingPage />}
      <ErrorDisplay show={show} setShow={setShow} error={userState.error} />
      <Routes>
        <Route element={<HomeContainer />} path='dashboard'>
          <Route element={<Notification />} path='notifications' />
          <Route element={<Inbox />} path='inbox' />
          <Route element={<Curriculum />} path='curriculum' />
          <Route element={<Users />} path='users' />
          <Route element={<Home />} path='/dashboard' />
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
