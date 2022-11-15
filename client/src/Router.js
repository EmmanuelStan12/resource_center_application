import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Box from "./styles/StyledBox";
import Navbar from './components/Navbar'
import ErrorDisplay from "./components/ErrorDisplay";

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
  return (
    <Box height='100vh' padding='70px 0px 0px'>
      <Navbar />
      <ErrorDisplay />
      <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Register />} path='/register' />
      <Route element={<Login />} path='/login' /> 
      </Routes>
    </Box>
  )
}

export default Router;
